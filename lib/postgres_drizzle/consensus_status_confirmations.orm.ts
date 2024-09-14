import { integer, pgTable, timestamp, uuid, smallint } from 'drizzle-orm/pg-core';
import { ConsensusSessionsPgTable } from '@/lib/postgres_drizzle/consensus_sessions.orm';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';
import { sql } from 'drizzle-orm';

export const ConsensusStatusConfirmationsPgTable = pgTable('consensus_status_confirmations', {
  consensusid: uuid('consensusid').primaryKey(),
  sessionid: integer('sessionid').references(() => ConsensusSessionsPgTable.sessionid),
  rankingvalue: smallint('rankingvalue'),
  votedfor: integer('votedfor').references(() => UsersPgTable.id),
  consensustatus: smallint('consensustatus'),
  modifiedbyid: integer('modifiedbyid').references(() => UsersPgTable.id),
  created: timestamp('created', { mode: 'date' }),
  updated: timestamp('updated', { mode: 'date' }).notNull().default(sql`now()`),
});
