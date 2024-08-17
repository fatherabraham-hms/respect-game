import { inet, integer, json, pgTable, uuid, timestamp, varchar } from 'drizzle-orm/pg-core';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';
import { sql } from 'drizzle-orm';

export const User_be_sessionsOrm = pgTable('user_be_sessions', {
  sessionid: uuid('sessionid').primaryKey(),
  userid: integer('userid').references(() => UsersPgTable.id),
  ipaddress: inet('ipaddress'),
  walletaddress: varchar('walletaddress', { length: 50 }),
  jwt: varchar('jwt', { length: 50 }),
  jsondata: json('jsondata'),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
  created: timestamp('created', { mode: 'date' }).notNull(),
  updated: timestamp('updated', { mode: 'date' }).notNull().default(sql`now()`),
});
