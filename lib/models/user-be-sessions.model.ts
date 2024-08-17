export type UserBeSessionsModel = {
  sessionid?: string;
  userid: number;
  ipaddress: string;
  jwt: string;
  walletaddress: string;
  jsondata?: any;
  expires?: Date;
  created?: Date;
  updated?: Date;
};
