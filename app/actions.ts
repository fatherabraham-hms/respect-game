'use server';

import {
  setUserLoginStatusById,
  getUserProfileByWalletAddress,
  createConsensusSession,
  updateUserProfile,
  createUserProfile,
  getAllUsers,
  SelectUser,
  getBeUserSession,
  createBeUserSession,
  createConsensusGroup,
  getUserIdByWalletAddress,
  getActiveGroupMembersByGroupId,
  getActiveGroupIdBySessionId,
  getFirstMatchingMemberOfSession,
  castSingleVoteForUser,
  getCurrentVotesForSessionByRanking,
  setSingleRankingConsensus,
  getRemainingVoteCandidatesForSession,
  getRankingsWithConsensusForSession,
  setSessionStatus,
  getConsensusSession,
  getConsensusWinnersRankingsAndWalletAddresses,
  getRecentSessionsForUserWalletAddress,
  createPrivyMap
} from '@/lib/db';
import { User } from '@privy-io/server-auth';
import { PrivyClient, AuthTokenClaims } from "@privy-io/server-auth";
import { cookies, headers } from 'next/headers';
import { RespectUser } from '@/lib/dtos/respect-user.dto';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';
import { ConsensusSessionSetupModel, Vote } from '@/lib/models/consensus-session-setup.model';
import { CONSENSUS_LIMIT } from '../data/constants/app_constants';
import { redirect } from 'next/navigation';

let isDevEnv = false;
if (process.env.NODE_ENV === 'development') {
  isDevEnv = true;
}

/*********** PRIVY AUTHENTICATION ***********/
const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;
const privy = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);

export type AuthenticateSuccessResponse = {
  claims: AuthTokenClaims;
};

export type AuthenticationErrorResponse = {
  error: string;
};

async function checkAccessToken() {
  const accessToken = cookies().get('privy-token');
  if (!accessToken?.value) {
    return null;
  }
  const verifiedClaims = await privy.verifyAuthToken(accessToken.value);
  if (!verifiedClaims) {
    return null;
  } else {
    return verifiedClaims;
  }
}

async function isAuthorized() {
  console.log('checking BE auth');
  const claims = await checkAccessToken();
  const privyUserId = { value: claims?.userId };
  const activeWalletAddress = cookies().get('activeWalletAddress');
  const ipaddress = (headers().get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
  if (activeWalletAddress?.value && (!privyUserId?.value || !ipaddress)) {
    await logout();
  }
  if (!ipaddress || !activeWalletAddress?.value || !privyUserId?.value) {
    if (!ipaddress) {
      console.log('no ip address found');
    }
    if (!activeWalletAddress?.value) {
      console.log('no active wallet address found');
    }
    if (!privyUserId?.value) {
      console.log('no privyUserId found');
    }
    redirect('/');
  }
  const session = await getBeUserSession(ipaddress, activeWalletAddress.value, privyUserId?.value || '');

  if (!session || session.length === 0) {
    // if their backend session is not found, but they are authorized, create a new session
    // TODO check if the claim is expired
    if (claims?.appId === process.env.NEXT_PUBLIC_PRIVY_APP_ID
        && claims?.issuer === 'privy.io'
        && activeWalletAddress?.value?.length > 8) {
      const profile = await getUserProfileByWalletAddress(activeWalletAddress?.value);
      let profileData: Partial<RespectUser> | null = null;
      if (Array.isArray(profile) && profile.length > 0) {
        profileData = profile[0] as RespectUser;
      }
      if (profileData?.walletaddress?.toLowerCase() === activeWalletAddress?.value.toLowerCase()) {
        const renewalUser: any = {
          wallet: {
            address: activeWalletAddress?.value
          }
        }
        console.log('renewing session for: ', profileData?.walletaddress);
        await login(renewalUser);
      }
      const renewalUser: any = {
        wallet: {
          address: profileData?.walletaddress
        }
      }
      await login(renewalUser);
    } else {
      // if no session is returned, make sure they are logged out fully.
      console.log('logging out due to no session');
      await logout();
    }
  }
  console.log('session created/found: ', session);
  return session[0];
}

async function isMemberOfSessionAction(consensusSessionId: number): Promise<boolean> {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress) {
    return false;
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMember = await getFirstMatchingMemberOfSession(consensusSessionId, beSession.walletaddress);
  return isAdmin || isMember?.length === 1;
}

export async function login(user: User) {
  console.log('logging in: ', user.wallet?.address || 'no address');
  const accessToken = cookies().get('privy-token');
  if (!accessToken?.value) {
    return null;
  }
  let verifiedClaims: AuthTokenClaims | null = null;
  try {
    verifiedClaims = await privy.verifyAuthToken(accessToken.value);
  } catch (error) {
    console.log(`Token verification failed with error ${error}.`);
    return null;
  }

  if (verifiedClaims) {
    if (user && user.wallet?.address) {
      cookies().set('activeWalletAddress', user.wallet?.address);
      const ipAddress = (headers().get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
      const accountIdResp = await createUserAccountIfNotExists(user);
      if (accountIdResp === null || accountIdResp.length === 0) {
        console.log('no account id found, could not create..');
        return null;
      } else {
        // create privy map and update user table with mapid
        await createPrivyMap(verifiedClaims, accountIdResp[0].id);
      }
      const validSession = await getBeUserSession(ipAddress, verifiedClaims.userId, user.wallet?.address);
      if (validSession?.length === 0) {
        console.log('creating be session for: ', user.wallet?.address);
        await createBeUserSession({
          sessionid: undefined,
          userid: accountIdResp?.[0]?.id || 0,
          ipaddress: ipAddress,
          walletaddress: user.wallet?.address,
          jwt: verifiedClaims.userId,
          externalsessionid: verifiedClaims.sessionId,
          jsondata: '',
          expires: new Date(),
          created: new Date(),
          updated: new Date()
        });
      }
      await setUserLoginStatusById(user.wallet?.address, true);
      return user.wallet?.address;
    }
  }
}

/**
 * Caution - this method must remain private so it does not expose the userid
 * @param user
 */
async function createUserAccountIfNotExists(user: User): Promise<{id: number}[] | null> {
  const address = user.wallet?.address;
  if (!address) {
    return null;
  }
  const useridResp = await getUserIdByWalletAddress(address);
  if (!useridResp || useridResp.length === 0) {
    await createUserProfile(user);
  } else if (useridResp && useridResp.length > 0 && typeof useridResp[0].id === 'number') {
    return useridResp;
  }
  return null;
}

export async function isLoggedInAction(address: string): Promise<boolean> {
  const session = await isAuthorized();
  const dbResult = await getUserProfileByWalletAddress(address);
  if (dbResult && dbResult.length > 0 && dbResult[0].loggedin && session && session?.sessionid?.length > 10) {
    return true;
  }
  return false;
}

export async function logout() {
  console.log('logging out');
  await checkAccessToken();
  const activeWalletAddress = cookies().get('activeWalletAddress');
  if (activeWalletAddress?.value) {
    await setUserLoginStatusById(activeWalletAddress?.value, false);
  }
  cookies().delete('activeWalletAddress');
  cookies().delete('privy-token');
  cookies().delete('authjs.csrf-token');
  redirect('/');
}

/*********** USERS ***********/

export async function getUsers(query: string = '', offset: number = 0) {
  await checkAccessToken();
  const result = await getAllUsers(query, offset);
  if (result) {
    result?.users.forEach((user: Partial<SelectUser>) => {
      user.id = undefined;
    });
  }
  return new Promise((resolve) => {
    resolve(result.users || []);
  });
}

export async function getUserProfile(address: string): Promise<Partial<RespectUser> | null> {
  await checkAccessToken();
  const profile = await getUserProfileByWalletAddress(address);
  let profileData: Partial<RespectUser> | null = null;
  if (Array.isArray(profile) && profile.length > 0) {
    profileData = profile[0] as RespectUser;
  }
  return new Promise((resolve) => {
    resolve(profileData);
  });
}

export async function updateUserProfileAction(user: Partial<RespectUser>): Promise<Partial<RespectUser> | { message: string }> {
  await checkAccessToken();
  const result = await updateUserProfile(user);
  return result as Partial<RespectUser> | { message: string };
}

// TODO - set up hats protocol
// check if the balance on the hats contract 0x3bc1A0Ad72417f2d411118085256fC53CBdDd137
// for the fractalgram cert 0x000000af00010001000200000000000000000000000000000000000000000000 is greater than 0
export async function isLoggedInUserAdmin(): Promise<boolean> {
  const admins = process.env.RESPECT_GAME_ADMINS?.split(',') || [];
  const session = await isAuthorized();
  if (session) {
    return admins?.some((addr) => addr.toLowerCase() === session?.walletaddress?.toLowerCase());
  }
  return false;
}

/*********** CONSENSUS SESSIONS ***********/
const defaultConsensusSession: ConsensusSessionDto = {
  sessionid: 0,
  sessiontype: 0,
  title: 'Default Session',
  description: 'Template for consensus sessions',
  modifiedbyid: 0,
  sessionstatus: 0,
  rankinglimit: 6,
  created: new Date(),
  updated: new Date()
};

export async function createConsensusSessionAndUserGroupAction(groupAddresses: string[]) {
  await checkAccessToken();
  const session: ConsensusSessionDto = defaultConsensusSession;
  // TODO - check incoming session if updated
  if (Object?.keys(session)?.length === 0) {
    throw new Error('Session is empty');
  }
  const isAdmin = await isLoggedInUserAdmin();
  if (!isAdmin) {
    throw new Error('Not allowed to create session');
  }
  const activeAdminWalletAddress = cookies().get('activeWalletAddress');
  if (!activeAdminWalletAddress?.value) {
    throw new Error('No active wallet address');
  }
  const userIdResp = await getUserIdByWalletAddress(activeAdminWalletAddress.value);
  if (!userIdResp || userIdResp.length === 0 || typeof userIdResp[0].id !== 'number') {
    throw new Error('No user found');
  }
  const userid = userIdResp[0].id;
  session.modifiedbyid = userid;
  session.sessionstatus = 1;
  const consensusSessionResponse = await createConsensusSession(session);
  if (consensusSessionResponse
    && consensusSessionResponse.length > 0
    && typeof consensusSessionResponse[0].sessionid === 'number') {
    const groupCreated = await createConsensusGroup(consensusSessionResponse[0].sessionid, groupAddresses, userid);
    return groupCreated ? consensusSessionResponse[0].sessionid : null;
  }
  return null;
}

export async function getConsensusSetupAction(consensusSessionId: number): Promise<ConsensusSessionSetupModel | null> {
  if (consensusSessionId <= 0) {
    throw new Error('Invalid session id');
  }
  await checkAccessToken();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  const consensusSessionSetup: ConsensusSessionSetupModel = {
    groupNum: groupid[0].groupid,
    attendees: [],
    rankingScheme: 'numeric-descending',
    votes: []
  };

  const groupMembers = await getRemainingVoteCandidatesForSession(consensusSessionId);
  if (groupMembers && groupMembers.length > 0) {
    consensusSessionSetup.attendees = [...groupMembers as RespectUser[]];
  }
  return consensusSessionSetup;
}

export async function getRecentSessionsForUserWalletAddressAction() {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    throw new Error('Not authorized');
  }
  return getRecentSessionsForUserWalletAddress(beSession.walletaddress);
}
/*********** CONSENSUS GROUPS ***********/

export async function getActiveGroupIdBySessionIdAction(consensusSessionId: number) {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    return null;
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isAdmin && !isMemberofSession) {
    throw new Error('Not a member of group');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    return null;
  }
  return groupid[0].groupid;
}

/*********** CONSENSUS GROUP MEMBERS ***********/

/*********** CONSENSUS VOTES ***********/
export async function setSingleVoteAction(
  consensusSessionId: number,
  ranking: number,
  walletAddress: string) {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    return null;
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isAdmin && !isMemberofSession) {
    return null;
  }
  const votedForResp = await getUserIdByWalletAddress(walletAddress);
  if (!votedForResp || votedForResp.length === 0 || typeof votedForResp[0].id !== 'number') {
    throw new Error('No current user found');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  const votedForUserId = votedForResp[0].id;
  await castSingleVoteForUser({
    votedfor: votedForUserId,
    sessionid: consensusSessionId,
    groupid: groupid[0].groupid,
    rankingvalue: ranking,
    modifiedbyid: beSession.userid,
    created: new Date(),
    updated: new Date()
  });
  return getCurrentVotesForSessionByRankingAction(consensusSessionId, ranking);
}

export async function getCurrentVotesForSessionByRankingAction(consensusSessionId: number, ranking: number) {
  await checkAccessToken();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  return getCurrentVotesForSessionByRanking('walletaddress', consensusSessionId, groupid[0].groupid, ranking) as Promise<Vote[]>;
}

/*********** CONSENSUS STATUS ***********/

export async function setSingleRankingConsensusStatusAction(consensusSessionId: number, rankingValue: number) {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    throw new Error('Not authorized');
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isAdmin && !isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }

  const counts: { id: string, count: number }[] = await getCurrentVotesForSessionByRanking('userid', consensusSessionId, groupid[0].groupid, rankingValue);
  if (!counts || counts.length === 0) {
    throw new Error('No counts found');
  }
  const totalVotes = counts.reduce((acc, ranking) => acc + ranking.count, 0);
  // get attendees for the session and groupid
  const groupMembers = await getActiveGroupMembersByGroupId(groupid[0].groupid);
  if (!groupMembers || groupMembers.length === 0) {
    throw new Error('No group members found');
  }
  // get the userid of the user who has the most votes
  const highestScore = counts.reduce((acc, ranking) => acc > ranking.count ? acc : ranking.count, 0);
  const userHavingHighestScore = counts.find((ranking) => ranking.count === highestScore);
  if (!userHavingHighestScore || !userHavingHighestScore.id) {
    throw new Error('No max voted for found');
  }
  // check if consensus reached
  if (userHavingHighestScore.count >= groupMembers.length * CONSENSUS_LIMIT) {
    const currentConsensusStatus = await getConsensusSession(consensusSessionId);
    if (!currentConsensusStatus || currentConsensusStatus.length === 0) {
      throw new Error('No consensus session found');
    }
    if (currentConsensusStatus[0].sessionstatus === 2) {
      throw new Error('Consensus already reached');
    }
    // set session status to in progress if not already
    if (currentConsensusStatus[0].sessionstatus === 0) {
      await setSessionStatus(consensusSessionId, 1);
    }
    await setSingleRankingConsensus(
      consensusSessionId,
      rankingValue,
      parseInt(userHavingHighestScore.id),
      1,
      beSession.userid);
  } else {
    throw new Error('Consensus not reached');
  }
}

export async function getRemainingAttendeesForSessionAction(consensusSessionId: number) {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    throw new Error('Not authorized');
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isAdmin && !isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  return getRemainingVoteCandidatesForSession(consensusSessionId);
}

export async function getRemainingRankingsForSessionAction(consensusSessionId: number) {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    throw new Error('Not authorized');
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isAdmin && !isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }

  const currentSessionResp = await getConsensusSession(consensusSessionId);
  if (!currentSessionResp || currentSessionResp.length === 0
  || typeof currentSessionResp[0]?.sessionstatus !== 'number') {
    throw new Error('No consensus session found');
  }
  // TODO make this work with other ranking schemes
  const highestRanking = currentSessionResp[0]?.rankinglimit || 6;
  const rankingsWithConsensusResp = await getRankingsWithConsensusForSession(consensusSessionId, currentSessionResp[0].sessionstatus, groupid[0].groupid);
  // NO VOTES YET
  // return list of all rankings, based on 'numeric-descending' if no rankings exist in db
  if (!rankingsWithConsensusResp || rankingsWithConsensusResp.length === 0) {
    return Array.from({ length: highestRanking }, (_, i) => i + 1).reverse();
  // INCOMPLETE VOTES rankings and session has NOT finished
  } else if (rankingsWithConsensusResp.length > 0
    && currentSessionResp[0].sessionstatus !== 2
    && typeof rankingsWithConsensusResp[0].rankingvalue === 'number') {
    const consensusReachedForCurrentRanking = await _hasConsensusOnRanking(consensusSessionId, groupid[0].groupid, rankingsWithConsensusResp[0].rankingvalue);
    const existingRankings = rankingsWithConsensusResp.map((ranking) => ranking.rankingvalue) as number[];

    let remainingRankings: number[];
    // CONSENSUS NOT REACHED, include the current ranking in the list, but exclude those having consensus
    if (!consensusReachedForCurrentRanking) {
      remainingRankings = Array.from({ length: highestRanking }, (_, i) => i + 1).filter((ranking) => !existingRankings.includes(ranking)).reverse();
    // CONSENSUS REACHED, exclude the current ranking from the list
    } else {
      remainingRankings = Array.from({ length: highestRanking }, (_, i) => i + 1).filter((ranking) => !existingRankings.includes(ranking)).reverse();
    }
    // if there are no more rankings to vote on, set the session status to finished, etc..
    await _handleSessionUpdates(consensusSessionId,
      currentSessionResp[0].sessionstatus,
      groupid[0].groupid,
      remainingRankings,
      beSession.userid);
    return remainingRankings;
  // VOTING FINISHED, rankings will need to be verified then pushed onchain next
  } else if (rankingsWithConsensusResp.length > 0 && currentSessionResp[0].sessionstatus === 2) {
    return [];
  }
}

export async function getConsensusSessionWinnersAction(consensusSessionId: number) {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    throw new Error('Not authorized');
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isAdmin && !isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  const currentConsensusStatus = await getConsensusSession(consensusSessionId);
  if (!currentConsensusStatus || currentConsensusStatus.length === 0
    || !currentConsensusStatus[0]?.sessionstatus) {
    throw new Error('Consensus session found');
  }
  if (currentConsensusStatus[0].sessionstatus !== 2) {
    throw new Error('Voting not finished');
  }
  return getConsensusWinnersRankingsAndWalletAddresses(consensusSessionId);
}

export async function hasConsensusOnRankingAction(consensusSessionId: number, rankingValue: number) {
  if (rankingValue === 0) {
    return false;
  }
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress || !beSession.userid) {
    throw new Error('Not authorized');
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isAdmin && !isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getActiveGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  return _hasConsensusOnRanking(consensusSessionId, groupid[0].groupid, rankingValue);
}

async function _hasConsensusOnRanking(consensusSessionId: number, groupid: number, rankingValue: number): Promise<boolean> {
  const counts: { id: string, count: number }[] = await getCurrentVotesForSessionByRanking('userid', consensusSessionId, groupid, rankingValue);
  if (!counts || counts.length === 0) {
    return false;
  }
  // get attendees for the session and groupid
  const groupMembers = await getActiveGroupMembersByGroupId(groupid);
  if (!groupMembers || groupMembers.length === 0) {
    return false;
  }
  // get the userid of the user who has the most votes
  const maxVotes = counts.reduce((acc, ranking) => acc > ranking.count ? acc : ranking.count, 0);
  const mostVotedForCandidate = counts.find((ranking) => ranking.count === maxVotes);
  if (!mostVotedForCandidate || !mostVotedForCandidate.id) {
    return false;
  }
  // check if consensus reached
  return mostVotedForCandidate.count >= groupMembers.length * CONSENSUS_LIMIT;
}

// SHOULD WE CLOSE THE SESSION?
// voting session is considered finished when vote consensus is reached
// consensus session status is finished when all rankings have been pushed onchain

async function _handleSessionUpdates(consensusSessionId: number,
                                     sessionStatus: number,
                                     groupid: number,
                                     remainingRankings: number[],
                                     modifiedBy: number) {
  // if there are no more rankings to vote on, set the session status to finished
  // if there is only one attendee left, set the ranking and set the session status to finished
  const remainingAttendees = await getRemainingAttendeesForSessionAction(consensusSessionId);
  if (remainingRankings.length === 0 || !remainingAttendees || remainingAttendees.length < 2) {
    // if only a single attendee is left, we don't need to vote, just set the ranking
    if (remainingAttendees && remainingAttendees.length === 1
      && sessionStatus === 1
      && remainingAttendees[0].walletaddress) {
      // convert the last attendee's wallet address into a userid
      const lastAttendee = await getUserIdByWalletAddress(remainingAttendees[0].walletaddress);
      if (!lastAttendee || lastAttendee.length === 0 || typeof lastAttendee[0].id !== 'number') {
        throw new Error('No last attendee found');
      }
      await setSingleRankingConsensus(
        consensusSessionId,
        remainingRankings[0],
        lastAttendee[0].id,
        1,
        modifiedBy);
    }
    await setSessionStatus(consensusSessionId, 2);
  }
}
