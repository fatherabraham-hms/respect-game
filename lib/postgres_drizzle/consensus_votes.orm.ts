import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core/index';
import { ConsensusGroupsPgTable } from '@/lib/postgres_drizzle/consensus_groups.orm';
import { UsersPgTable } from '@/lib/postgres_drizzle/users.orm';
import { ConsensusSessionsPgTable } from '@/lib/postgres_drizzle/consensus_sessions.orm';
import { smallint } from 'drizzle-orm/pg-core/columns/smallint';
import { sql } from 'drizzle-orm';

// CREATE TABLE consensus_votes (votedfor INT REFERENCES users (id), sessionid INT REFERENCES consensus_sessions (sessionid), groupid INT REFERENCES consensus_groups (groupid), rankingvalue SMALLINT, modifiedbyid INT REFERENCES users (id), created TIMESTAMP, updated TIMESTAMP);

export const ConsensusVotesPgTable = pgTable('consensus_votes', {
  votedfor: integer('groupid').references(() => UsersPgTable.id),
  sessionid: integer('sessionid').references(() => ConsensusSessionsPgTable.sessionId),
  groupid: integer('groupid').references(() => ConsensusGroupsPgTable.groupid),
  rankingvalue: smallint('rankingvalue'),
  modifiedbyid: integer('userid').references(() => UsersPgTable.id),
  created: timestamp('created', { mode: 'string'}),
  updated: timestamp('updated', { mode: 'string' }).notNull().default(sql`now()`),
});
