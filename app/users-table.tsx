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
import { User } from '@/lib/dtos/user.dto';
import { useEffect, useState } from 'react';
import { createConsensusSessionAndUserGroupAction, getUsers } from '@/app/actions';
import toast from 'react-hot-toast';


export function UsersTable() {
  const router = useRouter();
  const [users, setUsers] = useState<Partial<User[]>>([]);
  const [query, setQuery] = useState('');
  const offset = 0;
  const [groupAddresses, setGroupAddresses] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: Partial<User[]> | unknown = await getUsers(query, offset);
        const users = result as Partial<User[]>;
        setUsers(users || []);
      } catch (error) {
        toast.error('Could not fetch Users!');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query, offset]);

  function createSessionHandler() {
    console.log('groupAddresses ', groupAddresses);
    createConsensusSessionAndUserGroupAction(undefined, groupAddresses).then((resp) => {
      if (resp) {
        toast.success('Session Created!');
      }
    }).catch((error) => toast.error('Oops! An error occured, please try again!'));
  }

  // if (isLoading) return <Spinner />

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
            {users?.map((user: any) => (
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
          onClick={() => createSessionHandler()}
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
      setGroupAddresses(groupAddresses.filter((address) => address !== event.target.value));
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
