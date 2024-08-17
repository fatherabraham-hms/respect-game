'use server';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, sql } from 'drizzle-orm';
import { VercelPgDatabase } from 'drizzle-orm/vercel-postgres';
import {
  drizzle as LocalDrizzle,
  type PostgresJsDatabase,
} from "drizzle-orm/postgres-js";
import postgres from 'postgres';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';
import { ConsensusGroupsPgTable } from '@/lib/postgres_drizzle/consensus_groups.orm';
import { ConsensusSessionsPgTable } from '@/lib/postgres_drizzle/consensus_sessions.orm';
import { User } from '@/lib/dtos/user.dto';
import { User_be_sessionsOrm } from '@/lib/postgres_drizzle/user_be_sessions.orm';
import { UserBeSessionsDto } from '@/lib/dtos/user-be-sessions.dto';

// ************** TABLES ****************** //
const users = UsersPgTable;
const consensusSessions = ConsensusSessionsPgTable;
const consensusGroups = ConsensusGroupsPgTable;
const userBeSessions = User_be_sessionsOrm;


// -- create a table to store userid with groupid and sessionid
// CREATE TABLE consensus_groups (groupid SERIAL PRIMARY KEY, sessionid INT REFERENCES consensus_sessions (sessionid), groupstatus SMALLINT, modifiedbyid integer REFERENCES users (id), created TIMESTAMP, updated TIMESTAMP);
//
// -- create a table to store group members
// CREATE TABLE consensus_group_members (groupid INT REFERENCES consensus_groups (groupid), userid INT REFERENCES users (id), created TIMESTAMP, updated TIMESTAMP);
//
// --- create table to handle consensus session votes
// CREATE TABLE consensus_votes (votedfor INT REFERENCES users (id), sessionid INT REFERENCES consensus_sessions (sessionid), groupid INT REFERENCES consensus_groups (groupid), rankingValue SMALLINT, modifiedbyid INT REFERENCES users (id), created TIMESTAMP, updated TIMESTAMP);
//
// -- create a table to store the final consensus with each ranking
// CREATE TABLE consensus_status (sessionid INT REFERENCES consensus_sessions (sessionid), rankingValue INT, votedfor INT REFERENCES users (id), consensusStatus SMALLINT, modifiedbyid integer REFERENCES users (id), created TIMESTAMP, updated TIMESTAMP);



// https://www.thisdot.co/blog/configure-your-project-with-drizzle-for-local-and-deployed-databases
let db: | VercelPgDatabase<Record<string, never>>
| PostgresJsDatabase<Record<string, never>>;

if (process.env.NODE_ENV === 'production') {
  db = drizzle(
    neon(process.env.POSTGRES_URL!, {
      fetchOptions: {
        cache: 'no-store'
      }
    })
  );
} else {
  const migrationClient = postgres(process.env.POSTGRES_URL as string);
  db = LocalDrizzle(migrationClient);
}

// ************** UserBeSessionPgTable ****************** //
export type SelectUserBeSession = typeof userBeSessions.$inferSelect;
export async function getBeUserSession(ipAddress: string, walletAddress: string, jwt: string) {
  return db.select().from(userBeSessions)
    .where(eq(userBeSessions.ipaddress, ipAddress)
      && eq(userBeSessions.walletaddress, walletAddress)
      && sql.raw(`${userBeSessions.expires} > CURRENT_TIMESTAMP`)
      && eq(userBeSessions.jwt, jwt));
}

export async function createBeUserSession(session: Partial<UserBeSessionsDto>) {
  delete session.sessionid;
  return db.insert(userBeSessions).values({
    ...session,
    expires: new Date(Date.now() + 1000 * 60 * 60),
    created: new Date(),
    updated: new Date(),
  });
}

export async function deleteBeUserSession(ipAddress: string, walletAddress: string, jwt: string) {
  return db.delete(userBeSessions).where(eq(userBeSessions.ipaddress, ipAddress) &&eq(userBeSessions.walletaddress, walletAddress) && eq(userBeSessions.jwt, jwt));
}


// ************** UsersPgTable ****************** //
export type SelectUser = typeof users.$inferSelect;
export async function getAllUsers(
  search: string,
  offset: number
): Promise<{
  users: SelectUser[];
  newOffset: number | null;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      users: await db
        .select({
          id: users.id,
          name: users.name,
          username: users.username,
          email: users.email,
          telegram: users.telegram,
          walletaddress: users.walletaddress,
          loggedin: users.loggedin,
          lastlogin: users.lastlogin,
          permissions: users.permissions
        })
        .from(users)
        .where(eq(users.loggedin, true))
        .limit(1000),
      newOffset: null
    };
  }

  if (offset === null) {
    return { users: [], newOffset: null };
  }

  const moreUsers = await db.select().from(users).limit(20).offset(offset);
  const newOffset = moreUsers.length >= 20 ? offset + 20 : null;
  return { users: moreUsers, newOffset };
}

export async function deleteUserById(id: number) {
  await db.delete(users).where(eq(users.id, id));
}

export async function setUserLoginStatusById(walletAddress: string, loggedIn: boolean) {
  await db.update(users).set({ loggedin: loggedIn, lastlogin: new Date() }).where(eq(users.walletaddress, walletAddress));
}

export async function getUserProfileByWalletAddress(walletAddress: string) {
  return db.select({
    name: users.name,
    username: users.username,
    email: users.email,
    walletaddress: users.walletaddress,
    loggedin: users.loggedin,
    lastlogin: users.lastlogin,
    permissions: users.permissions
  }).from(users).limit(1).where(eq(users.walletaddress, walletAddress));
}

export async function getUserProfileByUsername(username: string) {
  return db.selectDistinct({
    name: users.name,
    username: users.username,
    email: users.email,
    walletaddress: users.walletaddress,
    loggedin: users.loggedin,
    lastlogin: users.lastlogin,
    permissions: users.permissions
  }).from(users).where(eq(users.username, username));
}

export async function createUserProfile(user: Partial<User>) {
  if (!user || user.walletaddress === undefined || user.walletaddress?.length < 5 ){
    return null;
  }
  return db.insert(users).values({...user});
}

export async function updateUserProfile(user: Partial<User>) {
  if (!user || user.walletaddress === undefined || user.walletaddress?.length < 5 ){
    return null;
  }

  const usersWithUsername = await getUserProfileByUsername(user.username!);
  if (usersWithUsername.length > 0 && usersWithUsername[0].walletaddress !== user.walletaddress) {
    return { message: 'Username already exists, find an unused name' };
  }

  return db.update(users).set({...user})
    .where(eq(users.walletaddress, user.walletaddress))
    .returning({
      name: users.name,
      username: users.username,
      email: users.email,
      walletaddress: users.walletaddress,
      loggedin: users.loggedin,
      lastlogin: users.lastlogin,
      permissions: users.permissions
    });
}

// ************** ConsensusSessionsPgTable ****************** //
export type ConsensusSessionDto = typeof consensusSessions.$inferSelect;

export async function getConsensusSessions() {
  return db.select().from(consensusSessions);
}

export async function createConsensusSession(session: ConsensusSessionDto) {
  return db.insert(consensusSessions).values({
    sessiontype: session.sessiontype,
    rankinglimit: session.rankinglimit,
    title: session.title,
    description: session.description,
    sessionstatus: session.sessionstatus,
    modifiedbyid: session.modifiedbyid,
  });
}

// ************** UsersPgTable ****************** //
