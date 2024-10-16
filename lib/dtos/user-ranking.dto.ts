import { RespectUser } from '@/lib/dtos/respect-user.dto';

export interface UserRanking extends RespectUser {
  votes: number;
}
