import { NextResponse, NextRequest } from 'next/server'
export { auth as middleware } from '@/lib/auth';
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
// let isDevEnv = false;
// if (process.env.NODE_ENV === 'development') {
//   isDevEnv = true;
// }

// https://stackoverflow.com/questions/77396564/setting-a-cookie-in-nextjs-14
// export function middleware(request: NextRequest) {
//   const res = NextResponse.next();
//   let ip = request.ip ?? request.headers.get('x-real-ip')
//   const forwardedFor = request.headers.get('x-forwarded-for')
//   if(!ip && forwardedFor){
//     ip = forwardedFor.split(',').at(0) ?? 'Unknown'
//   }
//   if(ip){
//     res.cookies.set("user-ip", ip, {
//       httpOnly: !isDevEnv,
//       expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
//     });
//   }
//
//   return res;
// }
