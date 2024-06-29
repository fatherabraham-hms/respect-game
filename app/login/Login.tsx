import Connect from '@/components/ui/thirdweb-connect';

export function Login() {
  return (
    <div
      className="absolute top-0 left-0 h-[100%] w-[100%] bg-[url('/static/images/op-fractal.jpeg')] bg-cover bg-center flex flex-col gap-[50px] items-center justify-center">
      <h1 className="p-4 bg-cyan-500 text-3xl font-bold color-white before rounded-lg">Welcome to Optimism Fractal!</h1>
      <Connect />
    </div>
)
}
