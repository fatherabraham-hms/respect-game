'use client';
import { NavItem } from '@/app/nav-item';
import { SettingsIcon, UsersIcon } from '@/components/icons';
import { useContext } from 'react';
import { AuthContext } from '../../data/context/Contexts';

export function NavSidebar() {
  const authContext = useContext(AuthContext);
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <NavItem href="/play">
        <UsersIcon className="h-4 w-4" />
        Play!
      </NavItem>
      <NavItem href="/">
        <UsersIcon className="h-4 w-4" />
        Users
      </NavItem>
      <NavItem href="/settings">
        <SettingsIcon className="h-4 w-4" />
        Settings
      </NavItem>
    </nav>
  );
}
