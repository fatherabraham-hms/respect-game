import { User } from '@/lib/dtos/user.dto';

export type Vote = {
  walletaddress: string,
  count: number
}

export type ConsensusSessionSetupModel =  {
  groupNum: number,
  attendees: User[],
  rankingScheme: 'numeric-descending' | 'numeric-ascending';
  votes: Vote[]
};
