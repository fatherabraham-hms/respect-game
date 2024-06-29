import { User } from '@/lib/dtos/user.dto';

export interface UserRanking extends User {
  votes: number;
}
