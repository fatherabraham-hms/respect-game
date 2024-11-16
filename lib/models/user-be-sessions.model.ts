export type UserBeSessionsModel = {
  sessionid?: string;
  userid: number | null;
  ipaddress: string | null;
  jwt: string | null;
  walletaddress: string | null;
  jsondata?: any;
  expires?: Date;
  created?: Date;
  updated?: Date;
};
