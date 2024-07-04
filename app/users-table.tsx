'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { Spinner } from '@/components/icons';
import { User } from '@/lib/dtos/user.dto';


const fetcher = (...args: any[]) => fetch(`/api/users`).then(res => res.json())
function useUsers () {
  const { data, error, isLoading } = useSWR(`/api/users`, fetcher)

  return {
    users: data?.users || [],
    newOffset: data?.newOffset,
    isLoading,
    isError: error
  }
}

export function UsersTable() {
  const router = useRouter();
  const { users, newOffset, isLoading, isError } = useUsers();
  const offset = 0;

  function onClick() {
    router.replace(`/?offset=${newOffset}`);
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Username</TableHead>
              <TableHead className="hidden md:table-cell">Logged In</TableHead>
              <TableHead className="hidden md:table-cell">Actions</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: User) => (
              <UserRow key={user.walletAddress} user={user} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function UserRow({ user }: { user: User }) {


  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>
        <span>{user.loggedIn.toString() }</span>
      </TableCell>
      <TableCell>
        {/*<Button*/}
        {/*  className="w-full"*/}
        {/*  size="sm"*/}
        {/*  variant="outline"*/}
        {/*  formAction={deleteUserWithPublicId}*/}
        {/*  disabled*/}
        {/*>*/}
        {/*  Delete*/}
        {/*</Button>*/}
        {/*<div>*/}
        {/*  <div*/}
        {/*    className="inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">*/}
        {/*    25%*/}
        {/*  </div>*/}
        {/*  <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar">*/}
        {/*    <div*/}
        {/*      className="w-3/12 flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"*/}
        {/*      ></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </TableCell>
    </TableRow>
  );
}
