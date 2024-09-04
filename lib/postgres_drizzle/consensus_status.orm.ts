import { pgTable, integer, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { ConsensusSessionsPgTable } from '@/lib/postgres_drizzle/consensus_sessions.orm';
import { smallint } from 'drizzle-orm/pg-core/columns/smallint';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';

export const ConsensusStatusPgTable = pgTable('sessionid', {
  sessionid: integer('sessionid').references(() => ConsensusSessionsPgTable.sessionid),
  rankingvalue: smallint('rankingvalue'),
  votedfor: integer('votedfor').references(() => UsersPgTable.id),
  consensustatus: smallint('sessionstatus'),
  modifiedbyid: integer('modifiedbyid').references(() => UsersPgTable.id),
  created: timestamp('created', { mode: 'date' }),
  updated: timestamp('updated', { mode: 'date' }).notNull().default(sql`now()`),
});
