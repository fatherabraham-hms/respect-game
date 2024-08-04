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
import { useState } from 'react';


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
  const [groupAddresses, setGroupAddresses] = useState<string[]>([]);

  function onClick() {
    console.log('create group with addresses', groupAddresses);
    console.log('create session', groupAddresses);
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[50px]"></TableHead>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Username</TableHead>
              <TableHead className="hidden md:table-cell">Logged In</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: User) => (
              <UserRow key={user.walletaddress} user={user} groupAddresses={groupAddresses} setGroupAddresses={setGroupAddresses}/>
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="default"
          disabled={groupAddresses?.length <= 1}
          onClick={() => onClick()}
        >
          Create Session ({groupAddresses?.length || 0})
        </Button>
      )}
    </>
  );
}

function UserRow({ user, groupAddresses, setGroupAddresses }: { user: User, groupAddresses: string[], setGroupAddresses: any}) {
  function handleCheckbox(event: any) {
    console.log(event.target.value);
    if (event.target.checked) {
      setGroupAddresses([...groupAddresses, event.target.value]);
    } else {
      setGroupAddresses(groupAddresses.filter((address) => address !== event.target));
    }
  }
  return (
    <TableRow>
      <TableCell>
        <input type="checkbox" value={user.walletaddress} onClick={handleCheckbox}/>
      </TableCell>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>
        <span>{user.loggedin.toString() }</span>
      </TableCell>
    </TableRow>
  );
}
