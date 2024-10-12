'use client';

import { Login } from '@/app/login/Login';

export default async function IndexPage() {
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <Login />
    </main>
  );
}
