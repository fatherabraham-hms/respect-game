export type User = {
  name: string;
  username: string;
  email: string;
  walletAddress: string;
  loggedIn: boolean;
  lastLogin: Date;
  permissions: number;
}
