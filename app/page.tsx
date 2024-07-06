import { UsersTable } from '@/app/users-table';
import { isLoggedInUserAdmin } from '@/app/actions';
import { Welcome } from '@/components/welcome/welcome';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const isAdmin = await isLoggedInUserAdmin();
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const users = [];
  const newOffset = 0;

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">{ isAdmin ? 'User Admin' : 'Welcome!!'}</h1>
      </div>
      <div className="w-full mb-4">
        {/*<Search value={searchParams.q} />*/}
      </div>
      { isAdmin ? <UsersTable /> : <Welcome />}
    </main>
  );
}
