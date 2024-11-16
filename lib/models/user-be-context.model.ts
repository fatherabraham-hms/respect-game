import { UserBeSessionsModel } from '@/lib/models/user-be-sessions.model';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';

export type UserBeContext = {
  beSession: UserBeSessionsModel | null;
  isAdmin: boolean;
  groupid: number;
  groupMembers: {name: string | null, username: string | null, walletaddress: string | null}[];
  consensusSession: ConsensusSessionDto | null;
};
