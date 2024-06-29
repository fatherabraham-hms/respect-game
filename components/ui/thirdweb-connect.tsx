import { ConnectButton } from 'thirdweb/react';
import { base, optimism } from 'thirdweb/chains';
// https://portal.thirdweb.com/connect/auth/frameworks/next
import { client } from '@/lib/client';
import {
  generatePayload, getUserProfile,
  isLoggedIn,
  login,
  logout
} from '@/app/actions';

import { Wallet } from 'thirdweb/src/wallets/interfaces/wallet';
import { useRouter } from 'next/navigation';


interface ConnectProps {
  setLoggedIn?: ((value: (((prevState: boolean) => boolean) | boolean)) => void) | undefined;
}

export default function Connect({ setLoggedIn }: ConnectProps) {
  const router = useRouter();
  return <ConnectButton
    client={client}
    auth={{
      isLoggedIn: async (address) => {
        // console.log("checking if logged in...", { address });
        return await isLoggedIn();
      },
      doLogin: async (params) => {
        login(params).then((verifiedAddr) => {
          getUserProfile(verifiedAddr || '').then((profile) => {
            console.log('logged in!', verifiedAddr);
            console.log('user profile', profile);
            if (!profile) {
              router.push('/signup');
            } else {
              setLoggedIn && setLoggedIn(true);
            }
          });
        });
      },
      getLoginPayload: async ({ address }) =>
        generatePayload({ address, chainId: base.id }),
      doLogout: async () => {
        console.log('logging out!');
        setLoggedIn && setLoggedIn(false);
        await logout();
      }
    }}
  />;
}
