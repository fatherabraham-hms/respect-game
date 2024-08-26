import { integer, pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { smallint } from 'drizzle-orm/pg-core/columns/smallint';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';
import { sql } from 'drizzle-orm';

export const ConsensusSessionsPgTable = pgTable('consensus_sessions', {
  sessionid: serial('sessionid').primaryKey(),
  sessiontype: smallint('sessiontype'),
  rankinglimit: integer('rankinglimit'),
  title: varchar('title', { length: 255 }),
  description: text('description'),
  sessionstatus: smallint('sessionstatus'),
  modifiedbyid: integer('modifiedbyid').references(() => UsersPgTable.id),
  created: timestamp('created', { mode: 'date'}),
  updated: timestamp('updated', { mode: 'date' }).notNull().default(sql`now()`),
});
