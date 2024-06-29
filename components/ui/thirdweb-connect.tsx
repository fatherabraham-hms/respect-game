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
import { useContext } from 'react';
import { Wallet } from 'thirdweb/src/wallets/interfaces/wallet';
import { UserContext } from '@/app/login/user-context';

export default function Connect() {
  const userContext = useContext(UserContext);
  return <ConnectButton
    client={client}
    onConnect={async (wallet: Wallet) => {
      //userContext.setLoggedIn(true);
      console.log('logged in!');
    }}
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
