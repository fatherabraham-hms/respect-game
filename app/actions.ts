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
  isMemberOfSession,
  castSingleVoteForUser,
  getCurrentVotesForSessionByRanking,
  setSingleRankingConsensus,
  getRemainingVoteCandidatesForSession,
  getRankingsWithConsensusForSession, setSessionStatus, getConsensusSession, getConsensusWinnerRankingAndWalletAddress
} from '@/lib/db';
import { VerifyLoginPayloadParams, createAuth } from 'thirdweb/auth';
import { privateKeyAccount } from 'thirdweb/wallets';
import { client } from '@/lib/client';
import { cookies, headers } from 'next/headers';
import { User } from '@/lib/dtos/user.dto';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';
import { ConsensusSessionSetupModel, Vote } from '@/lib/models/consensus-session-setup.model';
import { CONSENSUS_LIMIT } from '../data/constants/app_constants';

let isDevEnv = false;
if (process.env.NODE_ENV === 'development') {
  isDevEnv = true;
}

/*********** THIRDWEB AUTHENTICATION ***********/
// Checking JWT should be sufficient for most cases to verify that Client Server tampering is not happening
// https://medium.com/swlh/hacking-json-web-tokens-jwts-9122efe91e4a
const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || '';

if (!privateKey) {
  throw new Error('Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.');
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
  adminAccount: privateKeyAccount({ client, privateKey }),
  client: client
});

async function checkJWT() {
  const jwt = cookies().get('jwt');
  if (!jwt?.value) {
    return null;
  }
  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  if (!authResult.valid) {
    return null;
  }
}

async function isAuthorized() {
  await checkJWT();
  const jwt = cookies().get('jwt');
  const activeWalletAddress = cookies().get('activeWalletAddress');
  const ipaddress = (headers().get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
  if (!ipaddress || !activeWalletAddress?.value || !jwt?.value) {
    return null;
  }
  const session = await getBeUserSession(ipaddress, activeWalletAddress.value, jwt?.value || '');
  if (!session || session.length === 0) {
    return null;
  }
  return session[0];
}

async function isMemberOfSessionAction(consensusSessionId: number): Promise<boolean> {
  const beSession = await isAuthorized();
  if (!beSession || !beSession.sessionid || !beSession.walletaddress) {
    return false;
  }
  const isAdmin = await isLoggedInUserAdmin();
  const isMember = await isMemberOfSession(consensusSessionId, beSession.walletaddress);
  return !(!isAdmin && isMember?.length < 1);
}

export async function generatePayload(param: { address: string, chainId: number }) {
  param.chainId = 1;
  return await thirdwebAuth.generatePayload(param);
}

export async function login(payload: VerifyLoginPayloadParams) {
  const verifiedPayload = await thirdwebAuth.verifyPayload(payload);
  if (verifiedPayload.valid) {
    const jwt = await thirdwebAuth.generateJWT({
      payload: verifiedPayload.payload
    });
    cookies().set('jwt', jwt, { secure: !isDevEnv, expires: Date.now() + 1000 * 60 * 60 * 24 * 7 });
    if (verifiedPayload?.payload?.address) {
      cookies().set('activeWalletAddress', verifiedPayload?.payload?.address, {
        secure: !isDevEnv,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7
      });
      const ipAddress = (headers().get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
      const accountIdResp = await createUserAccountIfNotExists(verifiedPayload.payload.address);
      if (accountIdResp === null || accountIdResp.length === 0) {
        return null;
      }
      const validSession = await getBeUserSession(ipAddress, jwt, verifiedPayload?.payload?.address);
      if (validSession?.length === 0) {
        await createBeUserSession({
          sessionid: undefined,
          userid: accountIdResp?.[0]?.id || 0,
          ipaddress: ipAddress,
          walletaddress: verifiedPayload.payload.address,
          jwt: jwt,
          jsondata: '',
          expires: new Date(),
          created: new Date(),
          updated: new Date()
        });
      }
      await setUserLoginStatusById(verifiedPayload.payload.address, true);
      return verifiedPayload.payload.address;
    }
  }
}

/**
 * Caution - this method must remain private so it does not expose the userid
 * @param address
 */
async function createUserAccountIfNotExists(address: string): Promise<{id: number}[] | null> {
  const useridResp = await getUserIdByWalletAddress(address);
  if (!useridResp || useridResp.length === 0) {
    await createUserProfile({
      walletaddress: address,
      name: undefined,
      username: undefined,
      email: '',
      telegram: ''
    });
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
  await checkJWT();
  const activeWalletAddress = cookies().get('activeWalletAddress');
  if (activeWalletAddress?.value) {
    await setUserLoginStatusById(activeWalletAddress?.value, false);
  }
  // TODO invalidate session
  cookies().delete('activeWalletAddress');
  cookies().delete('jwt');
}

/*********** USERS ***********/

export async function getUsers(query: string = '', offset: number = 0) {
  await checkJWT();
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

export async function getUserProfile(address: string): Promise<Partial<User> | null> {
  await checkJWT();
  const profile = await getUserProfileByWalletAddress(address);
  let profileData: Partial<User> | null = null;
  if (Array.isArray(profile) && profile.length > 0) {
    // @ts-ignore
    profileData = profile[0];
  }
  return new Promise((resolve) => {
    resolve(profileData);
  });
}

export async function updateUserProfileAction(user: Partial<User>): Promise<Partial<User> | { message: string }> {
  await checkJWT();
  const result = await updateUserProfile(user);
  return result as Partial<User> | { message: string };
}

// TODO - set up hats protocol
// https://portal.thirdweb.com/references/typescript/v5/useWalletBalance
// https://app.hatsprotocol.xyz/trees/10/175?hatId=175.1.1.2
// check if the balance on the hats contract 0x3bc1A0Ad72417f2d411118085256fC53CBdDd137
// for the fractalgram cert 0x000000af00010001000200000000000000000000000000000000000000000000 is greater than 0
export async function isLoggedInUserAdmin(): Promise<boolean> {
  const admins = process.env.RESPECT_GAME_ADMINS?.split(',') || [];
  const session = await isAuthorized();
  if (session) {
    return admins?.some((addr) => addr === session?.walletaddress);
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
  await checkJWT();
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
  await checkJWT();
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

  const groupMembers = await getRemainingVoteCandidatesForSession(consensusSessionId, groupid[0].groupid);
  if (groupMembers && groupMembers.length > 0) {
    consensusSessionSetup.attendees = [...groupMembers as User[]];
  }
  return consensusSessionSetup;
}

/*********** CONSENSUS GROUPS ***********/

/*********** CONSENSUS GROUP MEMBERS ***********/

/*********** CONSENSUS VOTES ***********/
export async function setSingleVoteAction(
  consensusSessionId: number,
  consensusSessionSetupModel: ConsensusSessionSetupModel,
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
  if (!consensusSessionSetupModel || !consensusSessionSetupModel.attendees || consensusSessionSetupModel.attendees.length === 0) {
    throw new Error('Input session not valid');
  }
  const votedForResp = await getUserIdByWalletAddress(walletAddress);
  if (!votedForResp || votedForResp.length === 0 || typeof votedForResp[0].id !== 'number') {
    throw new Error('No current user found');
  }
  const votedForUserId = votedForResp[0].id;
  if (consensusSessionSetupModel.rankingScheme === 'numeric-descending') {
    await castSingleVoteForUser({
      votedfor: votedForUserId,
      sessionid: consensusSessionId,
      groupid: consensusSessionSetupModel.groupNum,
      rankingvalue: ranking,
      modifiedbyid: beSession.userid,
      created: new Date(),
      updated: new Date()
    });
  }
  return getCurrentVotesForSessionByRanking('walletaddress', consensusSessionId, consensusSessionSetupModel.groupNum, ranking) as Promise<Vote[]>;
}

export async function getCurrentVotesForSessionByRankingAction(consensusSessionId: number, ranking: number) {
  await checkJWT();
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
  return getRemainingVoteCandidatesForSession(consensusSessionId, groupid[0].groupid);
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

    let remainingRankings: number[] = [];
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
  return getConsensusWinnerRankingAndWalletAddress(consensusSessionId);
}

async function _hasConsensusOnRanking(consensusSessionId: number, groupid: number, rankingValue: number): Promise<boolean> {
  const counts: { id: string, count: number }[] = await getCurrentVotesForSessionByRanking('userid', consensusSessionId, groupid, rankingValue);
  if (!counts || counts.length === 0) {
    throw new Error('No counts found');
  }
  // get attendees for the session and groupid
  const groupMembers = await getActiveGroupMembersByGroupId(groupid);
  if (!groupMembers || groupMembers.length === 0) {
    throw new Error('No group members found');
  }
  // get the userid of the user who has the most votes
  const maxVotes = counts.reduce((acc, ranking) => acc > ranking.count ? acc : ranking.count, 0);
  const mostVotedForCandidate = counts.find((ranking) => ranking.count === maxVotes);
  if (!mostVotedForCandidate || !mostVotedForCandidate.id) {
    throw new Error('No max voted for found');
  }
  // check if consensus reached
  if (mostVotedForCandidate.count >= groupMembers.length * CONSENSUS_LIMIT) {
    return true;
  } else {
    return false;
  }
  return false;
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
      await setSingleRankingConsensus(lastAttendee[0].id, consensusSessionId, groupid, remainingRankings[0], modifiedBy);
    }
    await setSessionStatus(consensusSessionId, 2);
  }
}
