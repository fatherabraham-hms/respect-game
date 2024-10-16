'use client';

import { usePrivy } from '@privy-io/react-auth';

export function Login() {
  const { login } = usePrivy();
  return (
    <div
      className="absolute top-0 left-0 h-[100%] w-[100%] bg-[url('/static/images/fractalgram-bg.png')] bg-cover bg-center flex flex-col gap-[50px] items-center justify-center">
      <h1 className="p-4 bg-fuchsia-400 text-3xl font-bold color-white before rounded-lg">Welcome to
        Fractalgram!</h1>
      <button
        className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
        onClick={login}
      >
        Log in
      </button>
    </div>
  );
}
