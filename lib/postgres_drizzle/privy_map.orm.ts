import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const PrivyMapPgTable = pgTable('privy_map', {
  privymapid: serial('privymapid').primaryKey(),
  userid: integer('userid'),
  sessionid: text('sessionid'),
  appid: text('appid'),
  issuer: text('issuer'),
  issuedat: integer('issuedat'),
  expiration: integer('expiration'),
});
