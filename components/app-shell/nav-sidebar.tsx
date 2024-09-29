import { NavItem } from '@/app/nav-item';
import { SettingsIcon, UsersIcon } from '@/components/icons';

interface NavSidebarProps {
  isAdmin: boolean;
}

export function NavSidebar({ isAdmin }: NavSidebarProps) {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <NavItem href="/play">
        <UsersIcon className="h-4 w-4" />
        Play!
      </NavItem>
      {isAdmin && (
      <>
        <NavItem href="/">
          <UsersIcon className="h-4 w-4" />
          Users
        </NavItem>
        <NavItem href="/settings">
          <SettingsIcon className="h-4 w-4" />
          Settings
        </NavItem>
      </>)}
    </nav>
  );
}
