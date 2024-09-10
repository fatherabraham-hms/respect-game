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
  getLoggedInGroupMembersByGroupId,
  getPendingGroupIdBySessionId, isMemberOfSession, castConsensusVoteForUser, getCurrentVotesForSessionByRanking
} from '@/lib/db';
import { VerifyLoginPayloadParams, createAuth } from 'thirdweb/auth';
import { privateKeyAccount, getWalletBalance } from 'thirdweb/wallets';
import { client } from '@/lib/client';
import { cookies, headers } from 'next/headers';
import { User } from '@/lib/dtos/user.dto';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';
import { ConsensusSessionSetupModel } from '@/lib/models/consensus-session-setup.model';

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

export async function deleteUser(walletAddr: string) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
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
  const groupid = await getPendingGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  const consensusSessionSetup: ConsensusSessionSetupModel = {
    groupNum: groupid[0].groupid,
    attendees: [],
    rankingScheme: 'numeric-descending',
    votes: []
  };

  const groupMembers = await getLoggedInGroupMembersByGroupId(groupid[0].groupid);
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
  walletAddress: string,
  attestation: 'upvote' | 'downvote') {
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
    await castConsensusVoteForUser({
      votedfor: votedForUserId,
      sessionid: consensusSessionId,
      groupid: consensusSessionSetupModel.groupNum,
      rankingvalue: ranking,
      modifiedbyid: beSession.userid,
      created: new Date(),
      updated: new Date()
    });
  }
  return getCurrentVotesForSessionByRanking(consensusSessionId, consensusSessionSetupModel.groupNum, ranking);
}

export async function getCurrentVotesForSessionByRankingAction(consensusSessionId: number, ranking: number) {
  await checkJWT();
  const isMemberofSession = await isMemberOfSessionAction(consensusSessionId);
  if (!isMemberofSession) {
    throw new Error('Not a member of session');
  }
  const groupid = await getPendingGroupIdBySessionId(consensusSessionId);
  if (!groupid || groupid.length === 0 || typeof groupid[0].groupid !== 'number') {
    throw new Error('Not a member of group');
  }
  return getCurrentVotesForSessionByRanking(consensusSessionId, groupid[0].groupid, ranking);
}

/*********** CONSENSUS STATUS ***********/
