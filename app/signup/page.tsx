
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { updateUserProfileAction } from '@/app/actions';
import { RespectUser } from '@/lib/dtos/respect-user.dto';
import { Signup } from '@/components/signup/signup';
// import { useRouter } from 'next/navigation';

export default async function IndexPage() {
  // const router = useRouter();
  // const handleSave = () => {
  //   const update: Partial<User> = {
  //     name: 'Profile Test 1',
  //     username: 'superdooper1',
  //     email: 'foobar@test1.com'
  //   };
  //   updateUserProfileAction(update).then(() => {
  //     router.push('/play');
  //   });
  // };
  return (
    <div>
      <h1>Signup</h1>
      <Signup />
    </div>
  );
}
