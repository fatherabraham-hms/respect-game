import { User } from '@/lib/dtos/user.dto';
import { UserRanking } from '@/lib/dtos/user-ranking.dto';

export type ConsensusSessionDto =  {
  groupNum: number,
  attendees: User[],
  rankingScheme: 'numeric-descending' | 'numeric-ascending';
  rankings: { [key: string]: UserRanking }
};
