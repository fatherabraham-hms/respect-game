'use client';

import { ThirdwebProvider, useActiveWallet, useActiveWalletConnectionStatus, useDisconnect } from 'thirdweb/react';
import './globals.scss';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo } from '@/components/icons';
import Connect from '@/components/ui/thirdweb-connect';
import { useState } from 'react';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { Login } from '@/app/login/Login';
import { AuthContext } from '../data/context/Contexts';
import { useRouter } from 'next/navigation';
import { Signup } from '@/components/signup/signup';
import { Toaster } from 'react-hot-toast';
// export const metadata = {
//   title: 'Next.js App Router + NextAuth + Tailwind CSS',
//   description:
//     'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
// };

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const connectionStatus = useActiveWalletConnectionStatus();
  const [authContext, setAuthContext] = useState({
    isLoggedIn: false,
    isAdmin: false,
    hasProfile: false
  });
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  const handleDisconnect = () => {
    if (wallet) {
      disconnect(wallet);
    }
  }

  return (
    <AuthContext.Provider value={{ ...authContext, setAuthContext }}>
      <ThirdwebProvider>
        <html lang="en" className="h-full bg-gray-50">
        <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  <span className="">ACME</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                {authContext?.isLoggedIn && (
                  <NavSidebar />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header
              className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
                <Logo />
                <span className="">ACME</span>
              </Link>
              <Connect />
            </header>
            {
              (() => {
                if (authContext?.isLoggedIn && authContext?.hasProfile) {
                  return (
                    <div className="flex-1 overflow-auto">
                      {children}
                    </div>
                  );
                } else if (connectionStatus === 'connected' && authContext?.isLoggedIn && !authContext?.hasProfile) {
                  return (
                    <div className="flex-1 flex items-center justify-center">
                      <Signup />
                    </div>
                  );
                // } else if (connectionStatus === 'connected' && !authContext?.isLoggedIn) {
                //   handleDisconnect();
                //   return (
                //     <div className="flex-1 flex items-center justify-center">
                //       For Security, you'll need to sign in to continue!
                //     </div>
                //   );
                } else {
                  return (
                    <div className="flex-1 flex items-center justify-center">
                      <Login />
                    </div>
                  );
                }
              })()
            }
          </div>
        </div>
        <Toaster />
        <Analytics />
        </body>
        </html>
      </ThirdwebProvider>
    </AuthContext.Provider>
  );
}
