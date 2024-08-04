'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateUserProfileAction } from '@/app/actions';

export function Signup() {
  const router = useRouter();
  const [profileForm, setProfileForm] = useState({
    name: '',
    username: '',
    email: '',
    telegram: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    updateUserProfileAction({
      ...formProps
    }).then(() => {
      router.push('/play');
    });
  };

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={submitHandler}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <Input name={'name'} placeholder={'Jane Doe'} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Username
            </label>
          </div>
          <div className="md:w-2/3">
            <Input name={'username'} placeholder={'wunderkitty'} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <Input name={'email'} placeholder={'foo@bar.com'} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="md:w-2/3 block text-gray-500 font-bold">
              Telegram
            </label>
          </div>
          <div className="md:w-2/3">
            <Input name={'telegram'} placeholder={'wunderkitty'} />
          </div>
        </div>
        {/*  <div className="md:flex md:items-center mb-6">*/}
        {/*    <div className="md:w-1/3"></div>*/}
        {/*    <label className="md:w-2/3 block text-gray-500 font-bold">*/}
        {/*      <input className="mr-2 leading-tight" type="checkbox" />*/}
        {/*      <span className="text-sm">*/}
        {/*  Send me your newsletter!*/}
        {/*</span>*/}
        {/*    </label>*/}
        {/*  </div>*/}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button type={'submit'}>Save Profile</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
