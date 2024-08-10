'use server';

import {
  setUserLoginStatusById,
  getUserProfileByWalletAddress,
  createConsensusSession,
  ConsensusSessionDto, updateUserProfile, createUserProfile, getAllUsers, SelectUser
} from '@/lib/db';
import { VerifyLoginPayloadParams, createAuth } from "thirdweb/auth";
import { privateKeyAccount } from "thirdweb/wallets";
import { client } from "@/lib/client";
import { cookies } from "next/headers";
import {
  getLoggedInWalletAddress,
  resetLoggedInWalletAddress,
  setLoggedInWalletAddress
} from '../data/session/server_session';
import { User } from '@/lib/dtos/user.dto';

/*********** THIRDWEB AUTHENTICATION ***********/
// Checking JWT should be sufficient for most cases to verify that Client Server tampering is not happening
// https://medium.com/swlh/hacking-json-web-tokens-jwts-9122efe91e4a
const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.");
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  adminAccount: privateKeyAccount({ client, privateKey }),
  client: client,
});

async function checkJWT() {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return null;
  }
  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  if (!authResult.valid) {
    return null;
  }
}

export async function generatePayload(param: { address: string, chainId: number}) {
  param.chainId = 1;
  return await thirdwebAuth.generatePayload(param);
}

export async function login(payload: VerifyLoginPayloadParams) {
  const verifiedPayload = await thirdwebAuth.verifyPayload(payload);
  if (verifiedPayload.valid) {
    const jwt = await thirdwebAuth.generateJWT({
      payload: verifiedPayload.payload,
    });
    cookies().set("jwt", jwt);
    if (verifiedPayload?.payload?.address) {
      await createUserAccountIfNotExists(verifiedPayload.payload.address);
      await setLoggedInWalletAddress(verifiedPayload.payload.address);
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
      email: "",
      telegram: "",
    });
  }
}

export async function isLoggedInAction(address: string): Promise<boolean> {
  await checkJWT();
  const dbResult = await getUserProfileByWalletAddress(address);
  if (dbResult && dbResult[0].loggedin) {
    await setLoggedInWalletAddress(address);
  }
  return dbResult && dbResult[0]?.loggedin ? dbResult.length > 0 && dbResult[0].loggedin : false;
}

export async function logout() {
  await checkJWT();
  cookies().delete("jwt");
  const loggedInWalletAddress = await getLoggedInWalletAddress();
    if (loggedInWalletAddress) {
      await setUserLoginStatusById(loggedInWalletAddress, false);
    }
  await resetLoggedInWalletAddress();
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
  const admins = process.env.RESPECT_GAME_ADMINS?.split(",") || [];
  const loggedInWalletAddress = await getLoggedInWalletAddress();
  if (!loggedInWalletAddress) {
    return false;
  }
  return admins?.some((addr) => addr === loggedInWalletAddress);

}

/*********** CONSENSUS SESSIONS ***********/
export async function createConsensusSessionAction(session: ConsensusSessionDto) {
  await checkJWT();
  if (Object.keys(session)?.length === 0) {
    throw new Error("Session is empty");
  }
  const isAdmin = await isLoggedInUserAdmin();
  if (!isAdmin) {
    throw new Error("Not allowed to create session");
  }
  return createConsensusSession(session);
}

/*********** CONSENSUS GROUPS ***********/
export async function createConsensusGroup() {}


/*********** CONSENSUS GROUP MEMBERS ***********/

/*********** CONSENSUS VOTES ***********/

/*********** CONSENSUS STATUS ***********/
