import { ConsensusSessionClass } from './consensusSession.class';
import { User } from '@/lib/dtos/user.dto';

it('should create a new consensus session', () => {
  const users: User[] = [
    {
      id: 1,
      name: 'Alice',
      username: 'alice',
      email: 'alice@wonderland.com',
      walletAddress: '0x12345',
      loggedIn: false,
      lastLogin: new Date()
    },
    {
      id: 2,
      name: 'Cheshire Cat',
      username: 'cheshire',
      email: 'cheshire@wonderland.com',
      walletAddress: '0x54321',
      loggedIn: false,
      lastLogin: new Date()
    },
    {
      id: 3,
      name: 'Mad Hatter',
      username: 'madhatter',
      email: 'hatter@wonderland.com',
      walletAddress: '0xabcde',
      loggedIn: false,
      lastLogin: new Date()
    }];
  const consensusSession = new ConsensusSessionClass('test-chain', 1, 1, users);
  console.log(consensusSession.currentSession);
  expect(consensusSession.currentSession.attendees.length).toBe(3);
  expect(consensusSession.currentSession.rankingScheme).toBe('numeric-descending');
  expect(consensusSession.currentSession.rankings).toEqual({});
});
