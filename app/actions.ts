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
  createBeUserSession,
  getBeUserSession, deleteBeUserSession
} from '@/lib/db';
import { VerifyLoginPayloadParams, createAuth, LoginPayload } from 'thirdweb/auth';
import { privateKeyAccount } from 'thirdweb/wallets';
import { client } from '@/lib/client';
import { cookies, headers } from 'next/headers';
import { User } from '@/lib/dtos/user.dto';
import { useActiveAccount } from 'thirdweb/src/react/web/hooks/wallets/useActiveAccount';

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

/****************** PRIVATE UTILS *****************/
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

async function getIPAddress() {
  const header = headers();
  const ipaddress = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
  return ipaddress;
}

  export async function generatePayload(param: { address: string, chainId: number }) {
  param.chainId = 1;
  return await thirdwebAuth.generatePayload(param);
}

export async function login(payload: VerifyLoginPayloadParams) {
  const verifiedPayload = await thirdwebAuth.verifyPayload(payload);
  const ipaddress = await getIPAddress();
  if (verifiedPayload.valid) {
    const jwt = await thirdwebAuth.generateJWT({
      payload: verifiedPayload.payload
    });
    cookies().set('jwt', jwt);
    if (verifiedPayload?.payload?.address) {
      const id = await createUserAccountIfNotExists(verifiedPayload.payload.address);
      if (typeof id !== null) {
        await startUserBeSession(id || 0, ipaddress, verifiedPayload.payload.address, jwt);
        await setUserLoginStatusById(verifiedPayload.payload.address, true);
        return verifiedPayload.payload.address;
      }
    }
  }
  return null;
}

async function createUserAccountIfNotExists(address: string): Promise<number |null> {
  const user = await getUserProfileByWalletAddress(address);
  if (!user || user.length === 0) {
    const resp = await createUserProfile({
      walletaddress: address,
      name: undefined,
      username: undefined,
      email: '',
      telegram: ''
    });
    return resp && resp[0] ? resp[0]?.insertedId : null;
  }
  return null;
}

export async function isLoggedInAction(address: string): Promise<boolean> {
  await checkJWT();
  const dbResult = await getUserProfileByWalletAddress(address);
  const hasSession = await hasValidUserBeSession(address);
  if (dbResult && dbResult[0]?.loggedin && hasSession) {
    return true;
  }
  return false;
}

export async function logout() {
  await checkJWT();
  const activeAccount = useActiveAccount();
  const loggedInWalletAddress = activeAccount?.address;
  if (loggedInWalletAddress) {
    await setUserLoginStatusById(loggedInWalletAddress, false);
  }
  const ipaddress = await getIPAddress();
  if (!loggedInWalletAddress) {
    return;
  }
  const jwt = cookies().get('jwt');
  if (!jwt?.value) {
    return null;
  }
  await deleteBeUserSession(ipaddress, loggedInWalletAddress, jwt.value);
  cookies().delete('jwt');
}

/*********** USER SESSIONS ***********/

export async function startUserBeSession(userid: number,
                                         ipaddress: string,
                                         walletaddress: string,
                                         jwt: string) {
  await checkJWT();
  await createBeUserSession({
    sessionid: '',
    userid: userid,
    ipaddress: ipaddress,
    jwt,
    walletaddress: walletaddress,
    jsondata: {},
    expires: new Date(),
    created: new Date(),
    updated: new Date()
  });
}

export async function hasValidUserBeSession(walletaddress: string) {
  await checkJWT();
  const jwt = cookies().get('jwt');
  if (!jwt?.value) {
    return null;
  }
  const ipaddress = await getIPAddress();
  const session = await getBeUserSession(walletaddress, jwt.value, ipaddress);
  if (session) {
    return true;
  }
  return false;
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
  await checkJWT();
  const admins = process.env.RESPECT_GAME_ADMINS?.split(',') || [];
  const activeAccount = useActiveAccount();
  const loggedInWalletAddress = activeAccount?.address;
  if (!loggedInWalletAddress) {
    return false;
  }
  const hasSession = await hasValidUserBeSession(loggedInWalletAddress);
  if (!hasSession) {
    return false;
  }
  return admins?.some((addr) => addr === loggedInWalletAddress);
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

export async function createGroupAndSessionAction() {
  await checkJWT();
  // if (Object.keys(session)?.length === 0) {
  //   throw new Error("Session is empty");
  // }
  const isAdmin = await isLoggedInUserAdmin();
  if (!isAdmin) {
    throw new Error('Not allowed to create consensus session');
  }
  const sessionId = await createConsensusSession({
    sessiontype: 1,
    rankinglimit: 6,
    title: 'New TEST Session',
    description: 'New TEST Session',
    sessionstatus: 1,
    modifiedbyid: 1
  });
  const activeAccount = useActiveAccount();
  const loggedInWalletAddress = activeAccount?.address;
  if (!loggedInWalletAddress) {
    throw new Error('No active account');
  }
  const hasSession = await hasValidUserBeSession(loggedInWalletAddress);
  if (!hasSession) {
    throw new Error('Not allowed to create consensus session');
  }
}

/*********** CONSENSUS GROUPS ***********/
export async function createConsensusGroup() {
}


/*********** CONSENSUS GROUP MEMBERS ***********/

/*********** CONSENSUS VOTES ***********/

/*********** CONSENSUS STATUS ***********/
