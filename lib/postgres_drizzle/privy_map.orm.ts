import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const PrivyMapPgTable = pgTable('privy_map', {
  privymapid: serial('privymapid').primaryKey(),
  userId: varchar('userId', { length: 255 }),
  sessionId: text('sessionId'),
  appId: text('appId'),
  issuer: text('issuer'),
  issuedAt: integer('issuedAt'),
  expiration: integer('expiration'),
});
