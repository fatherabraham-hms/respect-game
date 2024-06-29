'use client';

import { ThirdwebProvider } from "thirdweb/react";
import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo } from '@/components/icons';
import Connect from '@/components/ui/thirdweb-connect';
import { SetStateAction, useState } from 'react';
import { UserContext } from '@/app/login/user-context';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { Login } from '@/app/login/Login';
import { Button } from '@/components/ui/button';

// export const metadata = {
//   title: 'Next.js App Router + NextAuth + Tailwind CSS',
//   description:
//     'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    console.log('toggling login');
    setLoggedIn(!loggedIn);
  }

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
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
                <Button onClick={toggleLogin}>Toggle Login</Button>
                { loggedIn && (
                  <NavSidebar />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
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
              loggedIn ? (
                <>{children}</>
              ) : (
                <Login />
              )
            }

          </div>
        </div>
        <Analytics />
      </body>
    </html>
    </ThirdwebProvider>
    </UserContext.Provider>
  );
}
