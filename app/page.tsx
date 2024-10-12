'use client';
import {UserPill} from '@privy-io/react-auth/ui';
import Link from 'next/link';
import { Logo } from '@/components/icons';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { usePrivy } from '@privy-io/react-auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UsersTable } from '@/app/users-table';

export default function IndexPage() {
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    logout,
  } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
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
              {ready && authenticated && <NavSidebar />}
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
            <UserPill user={user} onLogout={logout} />
          </header>

          {ready && authenticated && <UsersTable />}
        {/*  if (ready && authenticated) {*/}
        {/*  return (*/}
        {/*  <div className="flex-1 overflow-auto">*/}
        {/*  <div className="flex items-center justify-center h-full">*/}
        {/*  <h1 className="text-3xl font-bold">Welcome to ACME</h1>*/}
        {/*  </div>*/}
        {/*  </div>*/}
        {/*  );*/}
        {/*  // } else if (connectionStatus === 'connected' && authContext?.isLoggedIn && !authContext?.hasProfile) {*/}
        {/*  //   return (*/}
        {/*  //     <div className="flex-1 flex items-center justify-center">*/}
        {/*  //       <Signup />*/}
        {/*  //     </div>*/}
        {/*  //   );*/}
        {/*} else {*/}
        {/*  return (*/}
        {/*  <div className="flex-1 flex items-center justify-center">*/}
        {/*  <Login />*/}
        {/*  </div>*/}
        {/*  );*/}
        {/*}*/}



        </div>
      </div>
    </main>
  );
}
