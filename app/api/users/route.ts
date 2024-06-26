import { getUsers, SelectUser } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const offset = parseInt(searchParams.get('offset') || '0') ;
  const search = searchParams.get('q') || '';
  const { users, newOffset } = await getUsers(search, offset);
  return Response.json({ users, newOffset });
}
