'use server';

import {
  setUserLoginStatusById,
  getUserProfileByWalletAddress,
  createConsensusSession,
  ConsensusSessionDto
} from '@/lib/db';
import { VerifyLoginPayloadParams, createAuth } from "thirdweb/auth";
import { privateKeyAccount } from "thirdweb/wallets";
import { client } from "@/lib/client";
import { cookies } from "next/headers";

/*********** THIRDWEB AUTHENTICATION ***********/

const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";
let LOGGED_IN_WALLET_ADDR: string | undefined = undefined;

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
      LOGGED_IN_WALLET_ADDR = verifiedPayload.payload.address;
      await setUserLoginStatusById(verifiedPayload.payload.address, true);
      return verifiedPayload.payload.address;
    }
  }
}

export async function isLoggedIn() {
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return false;
  }
  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  return authResult.valid;
}

export async function logout() {
  cookies().delete("jwt");
  if (LOGGED_IN_WALLET_ADDR) {
    await setUserLoginStatusById(LOGGED_IN_WALLET_ADDR, false);
  }
  LOGGED_IN_WALLET_ADDR = undefined;
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

export async function deleteUser(walletAddr: string) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

async function isAdminLoggedIn(): Promise<boolean> {
  if (!LOGGED_IN_WALLET_ADDR) {
    return false;
  }
  const userProfile: any = await getUserProfile(LOGGED_IN_WALLET_ADDR);
  if (!userProfile) {
    return false;
  }
  if(userProfile.permissions < 1) {
    return false;
  }
  return true;
}

/*********** CONSENSUS SESSIONS ***********/
export async function createConsensusSessionAction(session: ConsensusSessionDto) {
  if (Object.keys(session)?.length === 0) {
    throw new Error("Session is empty");
  }
  const allowedTo = await isAdminLoggedIn();
  // return allowedTo ? createConsensusSession(session) : new Promise((resolve, reject) => reject("Not allowed to create session"));
  return createConsensusSession(session);
}
