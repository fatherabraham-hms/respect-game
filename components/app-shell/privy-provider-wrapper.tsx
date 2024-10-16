'use client';

import { PrivyProvider } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { login } from '@/app/actions';
import { User } from '@privy-io/server-auth';

export default function PrivyProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  function loginBackendSession(user: User) {
    if (user) {
      login(user).then(() => router.push("/"));
    }
  }

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      onSuccess={(user) => loginBackendSession(user as User)}>
      {children}
    </PrivyProvider>
  );
}
