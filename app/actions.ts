'use server';

import {
  setUserLoginStatusById,
  getUserProfileByWalletAddress,
  createConsensusSession,
  ConsensusSessionDto,
  updateUserProfile,
  createUserProfile,
  getAllUsers,
  SelectUser,
  getBeUserSession,
  createBeUserSession
} from '@/lib/db';
import { VerifyLoginPayloadParams, createAuth } from 'thirdweb/auth';
import { privateKeyAccount } from 'thirdweb/wallets';
import { client } from '@/lib/client';
import { cookies, headers } from 'next/headers';
import { User } from '@/lib/dtos/user.dto';

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
      await createUserAccountIfNotExists(verifiedPayload.payload.address);
      // TODO only create user session if it does not exist!
      await createBeUserSession({
        sessionid: undefined,
        userid: 1,
        ipaddress: (headers().get('x-forwarded-for') ?? '127.0.0.1').split(',')[0],
        walletaddress: verifiedPayload.payload.address,
        jwt: jwt,
        jsondata: '',
        expires: new Date(),
        created: new Date(),
        updated: new Date()
      });
      await setUserLoginStatusById(verifiedPayload.payload.address, true);
      return verifiedPayload.payload.address;
    }
  }
}

async function createUserAccountIfNotExists(address: string) {
  const user = await getUserProfileByWalletAddress(address);
  if (!user || user.length === 0) {
    await createUserProfile({
      walletaddress: address,
      name: undefined,
      username: undefined,
      email: '',
      telegram: ''
    });
  }
}

export async function isLoggedInAction(address: string): Promise<boolean> {
  await checkJWT();
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

export async function isLoggedInUserAdmin(): Promise<boolean> {
  const admins = process.env.RESPECT_GAME_ADMINS?.split(',') || [];
  const session = await isAuthorized();
  if (session) {
    return admins?.some((addr) => addr === session?.walletaddress);
  }
  return false;
}

/*********** CONSENSUS SESSIONS ***********/
export async function createConsensusSessionAction(session: ConsensusSessionDto) {
  await checkJWT();
  if (Object.keys(session)?.length === 0) {
    throw new Error('Session is empty');
  }
  const isAdmin = await isLoggedInUserAdmin();
  if (!isAdmin) {
    throw new Error('Not allowed to create session');
  }
  return createConsensusSession(session);
}

/*********** CONSENSUS GROUPS ***********/
export async function createConsensusGroup() {
}


/*********** CONSENSUS GROUP MEMBERS ***********/

/*********** CONSENSUS VOTES ***********/

/*********** CONSENSUS STATUS ***********/
