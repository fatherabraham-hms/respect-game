import { pgTable, integer, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { ConsensusSessionsPgTable } from '@/lib/postgres_drizzle/consensus_sessions.orm';
import { smallint } from 'drizzle-orm/pg-core/columns/smallint';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';

// CREATE TABLE consensus_status (sessionid INT REFERENCES consensus_sessions (sessionid), rankingvalue SMALLINT, votedfor INT REFERENCES users (id), consensusstatus SMALLINT, modifiedbyid integer REFERENCES users (id), created TIMESTAMP WITH TIME ZONE, updated TIMESTAMP WITH TIME ZONE);

export const ConsensusStatusPgTable = pgTable('sessionid', {
  sessionid: integer('sessionid').references(() => ConsensusSessionsPgTable.sessionId),
  rankingvalue: smallint('rankingvalue'),
  votedfor: integer('votedfor').references(() => UsersPgTable.id),
  consensustatus: smallint('sessionstatus'),
  modifiedbyid: integer('modifiedbyid').references(() => UsersPgTable.id),
  created: timestamp('created', { mode: 'string' }),
  updated: timestamp('updated', { mode: 'string' }).notNull().default(sql`now()`),
});
