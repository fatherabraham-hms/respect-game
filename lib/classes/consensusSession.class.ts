import { User } from '@/lib/dtos/user.dto';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';

export class ConsensusSessionClass {
  public currentSession: ConsensusSessionDto;
  private chain: string;

  constructor(chain: string, meetingNum: number, groupNum: number, users: User[]) {
    this.chain = chain;
    this.currentSession = {
      meetingNum: meetingNum,
      groupNum: groupNum,
      attendees: users,
      rankingScheme: 'numeric-descending',
      rankings: {}
    };
  }

  public setRanking(userId: number, attestation: 'upvote' | 'downvote') {
    if (!userId || !attestation) {
      return;
    }
    const user = this.currentSession.attendees.find((user) => user.id === userId);
    if (user && this.currentSession.rankingScheme === 'numeric-descending') {
      this.handleNumericVote(user, attestation);
    }
  }

  private handleNumericVote(user: User, attestation: 'upvote' | 'downvote') {
    if (!user || !attestation) {
      return;
    }

    let existingRanking = this.currentSession.rankings[user.id];
    // if they are not yet ranked, add them with 0 votes
    if (!existingRanking) {
      this.currentSession.rankings[user.id] = {
        ...user,
        votes: 0
      };
      existingRanking = this.currentSession.rankings[user.id];
    }

    if (attestation === 'upvote') {
      existingRanking.votes++;
    } else if (attestation === 'downvote') {
      existingRanking.votes <= 1 ? existingRanking.votes = 0 : existingRanking.votes--;
    }
  }

}
