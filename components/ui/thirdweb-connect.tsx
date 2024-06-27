import { ConnectButton } from 'thirdweb/react';
import { base, optimism } from 'thirdweb/chains';
// https://portal.thirdweb.com/connect/auth/frameworks/next
import { client } from "@/lib/client";
import {
  generatePayload,
  isLoggedIn,
  login,
  logout,
} from "@/app/actions";

export default function Connect() {
  return <ConnectButton
    client={client}
    auth={{
      isLoggedIn: async (address) => {
        console.log("checking if logged in!", { address });
        return await isLoggedIn();
      },
      doLogin: async (params) => {
        console.log("logging in!");
        await login(params);
      },
      getLoginPayload: async ({ address }) =>
        generatePayload({ address, chainId: base.id }),
      doLogout: async () => {
        console.log("logging out!");
        await logout();
      },
    }}
  />
}
