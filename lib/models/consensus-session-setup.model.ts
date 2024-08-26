import { User } from 'next-auth';
import { UserRanking } from '@/lib/dtos/user-ranking.dto';

export type ConsensusSessionSetupModel =  {
  groupNum: number,
  attendees: User[],
  rankingScheme: 'numeric-descending' | 'numeric-ascending';
  rankings: { [key: string]: UserRanking }
};
