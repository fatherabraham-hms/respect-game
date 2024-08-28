import { UserRanking } from '@/lib/dtos/user-ranking.dto';
import { User } from '@/lib/dtos/user.dto';

export type ConsensusSessionSetupModel =  {
  groupNum: number,
  attendees: User[],
  rankingScheme: 'numeric-descending' | 'numeric-ascending';
  rankings: { [key: string]: UserRanking }
};
