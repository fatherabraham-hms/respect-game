'use server';

import {
  setUserLoginStatusById,
  getUserProfileByWalletAddress,
  createConsensusSession,
  ConsensusSessionDto, updateUserProfile, createUserProfile
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

const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.");
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  adminAccount: privateKeyAccount({ client, privateKey }),
  client: client,
});

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

export async function isLoggedIn(address: string) {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return false;
  }
  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  return authResult.valid;
}

export async function logout() {
  cookies().delete("jwt");
  const loggedInWalletAddress = await getLoggedInWalletAddress();
    if (loggedInWalletAddress) {
      await setUserLoginStatusById(loggedInWalletAddress, false);
    }
  await resetLoggedInWalletAddress();
}

export async function getUserProfile(address: string) {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return null;
  }

  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  if (!authResult.valid) {
    return null;
  }
  return await getUserProfileByWalletAddress(address);
}

export async function updateUserProfileAction(user: Partial<User>) {
  if (!user) {
    return null;
  }
  // TODO: add jwt verification here
  const loggedInUserAddress = getLoggedInWalletAddress();
  user.walletaddress = await loggedInUserAddress;
  return await updateUserProfile(user);
}

export async function deleteUser(walletAddr: string) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

export async function isLoggedInUserAdmin(): Promise<boolean> {
  const admins = process.env.RESPECT_GAME_ADMINS?.split(",") || [];
  const loggedInWalletAddress = await getLoggedInWalletAddress();
  if (!loggedInWalletAddress) {
    return false;
  }
  const userProfile: any = await getUserProfile(loggedInWalletAddress);
  if (!userProfile || userProfile?.length === 0) {
    return false;
  }
  if (!admins?.some((addr) => addr === loggedInWalletAddress)) {
    return false;
  }
  return true;
}

/*********** CONSENSUS SESSIONS ***********/
export async function createConsensusSessionAction(session: ConsensusSessionDto) {
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
