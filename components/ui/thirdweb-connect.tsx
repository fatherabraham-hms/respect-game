import { ConnectButton } from 'thirdweb/react';
import { base } from 'thirdweb/chains';
// https://portal.thirdweb.com/connect/auth/frameworks/next
import { client } from '@/lib/client';
import {
  generatePayload, getUserProfile,
  isLoggedIn, isLoggedInUserAdmin,
  login,
  logout
} from '@/app/actions';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../data/context/Contexts';
import { useContext } from 'react';

// TODO: possible future direction https://docs.passport.xyz/, https://help.guild.xyz/en/articles/6947626-guild-sdk

export default function Connect() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  return <ConnectButton
    client={client}
    onDisconnect={() => {}}
    auth={{
      isLoggedIn: async (address) => {
        console.log("checking if logged in...", { address });
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
              isLoggedInUserAdmin().then((isAdmin) => {
                authContext.setAuthContext({
                  isLoggedIn: true,
                  isAdmin
                });
              });
            }
          });
        });
      },
      getLoginPayload: async ({ address }) =>
        generatePayload({ address, chainId: base.id }),
      doLogout: async () => {
        console.log('logging out!');
        authContext.setAuthContext({
          isLoggedIn: false,
          isAdmin: false
        });
        await logout();
        router.push('/');
      }
    }}
  />;
}
