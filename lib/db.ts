'use server';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, serial, varchar, boolean, date, integer } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';

const db = drizzle(
  neon(process.env.POSTGRES_URL!, {
    fetchOptions: {
      cache: 'no-store'
    }
  })
);

const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }),
  username: varchar('username', { length: 50 }),
  email: varchar('email', { length: 50 }),
  walletAddress: varchar('walletaddress', { length: 50 }),
  loggedIn: boolean('loggedin'),
  lastLogin: date('lastlogin'),
  permissions: integer('permissions')
});

export type SelectUser = typeof users.$inferSelect;

export async function getUsers(
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
          walletAddress: users.walletAddress,
          loggedIn: users.loggedIn,
          lastLogin: users.lastLogin,
          permissions: users.permissions
        })
        .from(users)
        .where(eq(users.loggedIn, true))
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
  await db.update(users).set({ loggedIn }).where(eq(users.walletAddress, walletAddress));
}

export async function getUserProfileByWalletAddress(walletAddress: string) {
  return db.select().from(users).where(eq(users.walletAddress, walletAddress));
}

// CREATE TABLE consensus_sessions (sessionid SERIAL PRIMARY KEY, sessiontype VARCHAR(255), rankingLimit INT, title VARCHAR(255), description TEXT, status VARCHAR(255), adminid INT, created DATETIME, updated DATETIME);
const consensusSessions = pgTable('consensus_sessions', {
  sessionId: serial('sessionid').primaryKey(),
  sessionType: varchar('sessiontype', { length: 255 }),
  rankingLimit: varchar('rankinglimit', { length: 255 }),
  title: varchar('title', { length: 255 }),
  description: varchar('description', { length: 255 }),
  status: varchar('status', { length: 255 }),
  adminId: varchar('adminid', { length: 255 }),
  created: date('created'),
  updated: date('updated')
});

export type ConsensusSessionDto = typeof consensusSessions.$inferSelect;

export async function getConsensusSessions() {
  return db.select().from(consensusSessions);
}

export async function createConsensusSession(session: ConsensusSessionDto) {
  return db.insert(consensusSessions).values(session);
}
