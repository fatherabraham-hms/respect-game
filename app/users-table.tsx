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
import { Spinner } from '@/components/icons';


export function UsersTable() {
  const router = useRouter();
  const [users, setUsers] = useState<Partial<User[]>>([]);
  const [query, setQuery] = useState('');
  const [groupAddresses, setGroupAddresses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const offset = 0;

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
    setIsLoading(true);
    createConsensusSessionAndUserGroupAction(groupAddresses).then((resp) => {
      if (typeof resp === 'number') {
        toast.success('Session Created!');
        router.push(`/play/${resp}`);
      }
    }).catch((error) => toast.error('Oops! An error occured, please try again!'));
    setIsLoading(false);
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
