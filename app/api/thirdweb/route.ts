import { createThirdwebClient } from 'thirdweb';
import { THIRDWEB_CLIENT_ID } from '../../../data/constants/app_constants';
import { createAuth } from 'thirdweb/src/auth/auth';

const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID || THIRDWEB_CLIENT_ID,
});

const thirdwebAuth = createAuth({
  domain: "localhost:3000",
  client,
});
//
// // 1. generate a login payload
// const loginPayload = await thirdwebAuth.generatePayload({
//   address: "0x123...",
// });
//
// // 2. sign the login payload
// const signature = await thirdwebAuth.signPayload({
//   payload: loginPayload,
//   account: userAccount,
// });
//
// // 3. verify the login payload and signature that the client sends back later
// const verifiedPayload = await thirdwebAuth.verifyPayload({
//   payload: loginPayload,
//   signature,
// });
//
// // 4. generate a JWT for the client
// const jwt = await thirdwebAuth.generateJWT({ payload: verifiedPayload });
//
// // 5. set the JWT as a cookie or store it another way
//
// // 6. authenticate the client based on the JWT on subsequent calls
// const { valid, parsedJWT } = await thirdwebAuth.verifyJWT({ jwt });
//
// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const offset = parseInt(searchParams.get('offset') || '0');
//   const search = searchParams.get('q') || '';
//   const { users, newOffset } = await getUsers(search, offset);
//   return Response.json({ users, newOffset });
// }
