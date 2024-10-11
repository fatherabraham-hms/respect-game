import { ConnectButton } from 'thirdweb/react';
import { ethereum, optimism, optimismSepolia } from 'thirdweb/chains';
// https://portal.thirdweb.com/connect/auth/frameworks/next
import { client } from '@/lib/client';
import {
  getUserProfile,
  isLoggedInAction, isLoggedInUserAdmin,
  login,
  logout
} from '@/app/actions';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../data/context/Contexts';
import { useContext } from 'react';
import { RespectUser } from '@/lib/dtos/respect-user.dto';

// TODO: possible future direction https://docs.passport.xyz/, https://help.guild.xyz/en/articles/6947626-guild-sdk

export default function ThirdWebConnect() {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  async function isLoggedInSetContext(profile: Partial<RespectUser> | null, verifiedAddr: string): Promise<boolean> {
    const admin = await isLoggedInUserAdmin();
    const isLoggedIn = await isLoggedInAction(verifiedAddr);
    if (isLoggedIn) {
      authContext.setAuthContext({
        isLoggedIn: isLoggedIn,
        admin,
        hasProfile: profile?.walletaddress === verifiedAddr && profile?.username !== null
      });
      return true;
    }
    return false;
  }

  return <ConnectButton
    chains={[optimism, optimismSepolia, ethereum]}
    client={client}
    onDisconnect={() => {}}
    auth={{
      isLoggedIn: async (address) => {
        const profile = await getUserProfile(address);
        return await isLoggedInSetContext(profile, address);
      },
      doLogin: async (params) => {
        const verifiedAddress = await login(params);
        if (verifiedAddress) {
          const profile = await getUserProfile(verifiedAddress);
          const loggedIn = await isLoggedInSetContext(profile, verifiedAddress);
          if (loggedIn && profile === null) {
            router.push('/signup');
          } else if (loggedIn
            && profile
            && 'walletAddress' in profile
            && profile?.permissions && profile.permissions > 1) {
            router.push('/users');
          } else if (loggedIn
            && profile
            && 'walletAddress' in profile) {
            router.push('/play');
          }
        }

      },
      // getLoginPayload: async ({ address }) =>
      //   generatePayload({ address, chainId: ethereum.id }),
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
