import { getUsers, SelectUser } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

// type ResponseData = {
//   users: SelectUser[];
//   newOffset: number | null;
// };
//
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//
//   const search = req.query.q as string;
//   const offset = Number(req.query.offset);
//
//   const { users, newOffset } = await getUsers(search, offset);
//
//   res.status(200).json({ users, newOffset });
// };

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const offset = parseInt(searchParams.get('offset') || '0') ;
  const search = searchParams.get('q') || '';
  const { users, newOffset } = await getUsers(search, offset);
  return Response.json({ users, newOffset });
}
