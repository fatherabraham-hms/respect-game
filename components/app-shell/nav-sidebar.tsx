import { NavItem } from '@/app/nav-item';
import { SettingsIcon, UsersIcon } from '@/components/icons';

export function NavSidebar() {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <NavItem href="/">
        <UsersIcon className="h-4 w-4" />
        Users
      </NavItem>
      <NavItem href="/play">
        <UsersIcon className="h-4 w-4" />
        Play!
      </NavItem>
      <NavItem href="/settings">
        <SettingsIcon className="h-4 w-4" />
        Settings
      </NavItem>
    </nav>
  );
}
