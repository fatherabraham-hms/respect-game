'use server';

import { setUserLoginStatusById, getUserProfileByWalletAddress } from '@/lib/db';
import { VerifyLoginPayloadParams, createAuth } from "thirdweb/auth";
import { privateKeyAccount } from "thirdweb/wallets";
import { client } from "@/lib/client";
import { cookies } from "next/headers";

/*********** THIRDWEB AUTHENTICATION ***********/

const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";
let loggedInUserWalletAddress: string = '';

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
      loggedInUserWalletAddress = verifiedPayload.payload.address;
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
  await setUserLoginStatusById(loggedInUserWalletAddress, false);
}

export async function getUserProfile(address: string) {
  console.log('getUserProfile');
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

/*********** CONSENSUS SESSIONS ***********/
export async function createConsensusSession() {
}
