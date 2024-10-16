import { RespectUser } from '@/lib/dtos/respect-user.dto';

export type Vote = {
  walletaddress: string,
  count: number
}

export type ConsensusSessionSetupModel =  {
  groupNum: number,
  attendees: RespectUser[],
  rankingScheme: 'numeric-descending' | 'numeric-ascending';
  votes: Vote[]
};
