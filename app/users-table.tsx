'use client';

// // import {
// //   TableHead,
// //   TableRow,
// //   TableHeader,
// //   TableCell,
// //   TableBody,
// //   Table
// // } from '@/components/ui/table';
// import { HatsClient } from "@hatsprotocol/sdk-v1-core"; 
// // import { Button } from '@/components/ui/button';
// // import { useRouter } from 'next/navigation';
// // import { RespectUser } from '@/lib/dtos/respect-user.dto';
// import { useEffect, useState } from 'react';
// // import { createConsensusSessionAndUserGroupAction, getUsers } from '@/app/actions';
// // import toast from 'react-hot-toast';
// // import { Spinner } from '@/components/icons';
// // import { Badge } from '@/components/ui/badge';
// // import { PrivyClient } from '@privy-io/server-auth';
// import { PrivyProvider } from '@privy-io/react-auth';
// import { createPublicClient, http } from 'viem';
// import { optimism } from 'viem/chains';
// // import { createWalletClient, custom } from 'viem';

import { HatsClient } from "@hatsprotocol/sdk-v1-core";
import { useEffect, useState } from 'react';
import { createPublicClient, http, PublicClient,  } from 'viem'; 
import { optimism } from 'viem/chains'; 
import { usePrivy } from "@privy-io/react-auth";



export default function TestHatCheck() {  // Ensure correct export
  const [isWearer, setIsWearer] = useState<boolean | null>(null);
  const hatId = BigInt('0x000000af00010001000200000000000000000000000000000000000000000000');
  const { user } = usePrivy();
  // Setup the public client for Hats Protocol
  const publicClient = createPublicClient({
    chain: optimism,
    transport: http('https://opt-mainnet.g.alchemy.com/v2/rl6LeNsMH14k3Wdb2qWo2uiVw-haHgKz'),
  }) as PublicClient;

  const hatsClient = new HatsClient({
    chainId: 10,
    publicClient: publicClient, 
  });

  
  useEffect(() => {
    const checkUserAuthorization = async () => {
      try {
        if (user?.wallet?.address && user.wallet.address.startsWith("0x")) {
          const isHatWearer = await hatsClient.isWearerOfHat({
            wearer: user.wallet.address as `0x${string}`, // Type assertion
            hatId,
          });
          setIsWearer(isHatWearer);
        }
      } catch (error) {
        console.error("Error checking hat status:", error);
      }
    };

    checkUserAuthorization();
  }, [hatsClient, hatId, user?.wallet?.address]);

  // Simple return to show if the check passed or failed
  return (
    <div>
      {isWearer === null && <p>Checking authorization...</p>}
      {isWearer === true && <p>IT WORKS</p>}
      {isWearer === false && <p>Not an Admin, try again</p>}
    </div>
  );
}

// export function UsersTable() {
//   const router = useRouter();
//   const [users, setUsers] = useState<Partial<RespectUser[]>>([]);
//   const [query, setQuery] = useState('');
//   const [groupAddresses, setGroupAddresses] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const offset = 0;
//   const { connectWallet } = usePrivy();
//   const [walletClient, setWalletClient] = useState<any>(null); 
//   const hatId = "0x000000af00010001000200000000000000000000000000000000000000000000";

//   const publicClient = createPublicClient({
//     chain: optimism,
//     transport: http('https://opt-mainnet.g.alchemy.com/v2/rl6LeNsMH14k3Wdb2qWo2uiVw-haHgKz'),
//   });

//   const hatsClient = new HatsClient({
//     chainId: 10,
//     publicClient: publicClient as any,
//     walletClient,
// });



//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const result: Partial<RespectUser[]> | unknown = await getUsers(query, offset);
//         const users = result as Partial<RespectUser[]>;
//         setUsers(users || []);
//       } catch (error) {
//         toast.error('Could not fetch Users!');
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchUserData();
//     const interval = setInterval(fetchUserData, 5000);
//     return () => clearInterval(interval);
//   }, [query, offset]);

//   function createSessionHandler() {
//     setIsLoading(true);
//     createConsensusSessionAndUserGroupAction(groupAddresses).then((resp) => {
//       if (typeof resp === 'number') {
//         toast.success('Session Created!');
//         router.push(`/play/${resp}`);
//       }
//     }).catch(() => toast.error('Oops! An error occured, please try again!'));
//     setIsLoading(false);
//   }

//   if (isLoading) return <Spinner />;

//   return (
//     <>
//       {(
//         <Button
//           className="mt-4 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           disabled={groupAddresses?.length <= 1}
//           onClick={() => createSessionHandler()}
//         >
//           Create Session ({groupAddresses?.length || 0})
//         </Button>
//       )}
//       <br/>
//       <form className="border shadow-sm rounded-lg">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="max-w-[50px]"></TableHead>
//               <TableHead className="max-w-[150px]">Name</TableHead>
//               <TableHead className="hidden md:table-cell">Email</TableHead>
//               <TableHead className="hidden md:table-cell">Wallet Address</TableHead>
//               <TableHead className="hidden md:table-cell">Username</TableHead>
//               <TableHead className="hidden md:table-cell">Logged In</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {users?.map((user: any) => (
//               <UserRow key={user.walletaddress} user={user} groupAddresses={groupAddresses}
//                        setGroupAddresses={setGroupAddresses} />
//             ))}
//           </TableBody>
//         </Table>
//       </form>
//     </>
//   );
// }

// function UserRow({ user, groupAddresses, setGroupAddresses }: {
//   user: RespectUser,
//   groupAddresses: string[],
//   setGroupAddresses: any
// }) {
//   function handleCheckbox(event: any) {
//     console.log(event.target.value);
//     if (event.target.checked) {
//       setGroupAddresses([...groupAddresses, event.target.value]);
//     } else {
//       setGroupAddresses(groupAddresses.filter((address) => address !== event.target.value));
//     }
//   }

//   const disabledStyle = 'bg-gray-200 text-gray-500 hover:bg-gray-200 cursor-not-allowed';
//   return (
//     <TableRow className={!user.loggedin ? disabledStyle : ''}>
//       <TableCell>
//         <input className={!user.loggedin ? disabledStyle : ''}
//                disabled={!user.loggedin} type="checkbox" value={user.walletaddress} onClick={handleCheckbox} />
//       </TableCell>
//       <TableCell className="font-medium">{user.name}</TableCell>
//       <TableCell className="hidden md:table-cell">{user.email}</TableCell>
//       <TableCell className="font-medium">{user.walletaddress}</TableCell>
//       <TableCell>{user.username}</TableCell>
//       <TableCell>
//         {
//           user.loggedin && <Badge color={'green'}>Logged In</Badge>
//         }
//         {
//           !user.loggedin && <Badge color={'red'}>Not Logged In</Badge>
//         }
//       </TableCell>
//     </TableRow>
//   );
// }
