import { useRouter } from 'next/navigation';
import { useLogin } from '@privy-io/react-auth';

export function Login() {
  const router = useRouter();
  const { login } = useLogin({
    onComplete: () => router.push("/users"),
  });
  return (
    <div
      className="absolute top-0 left-0 h-[100%] w-[100%] bg-[url('/static/images/op-fractal-bg.jpeg')] bg-cover bg-center flex flex-col gap-[50px] items-center justify-center">
      <h1 className="p-4 bg-fuchsia-400 text-3xl font-bold color-white before rounded-lg">Welcome to
        Fractalgram!</h1>
        <div className="mt-6 flex justify-center text-center">
          <button
            className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
            onClick={login}
          >
            Log in
          </button>
        </div>
    </div>
  );
}
