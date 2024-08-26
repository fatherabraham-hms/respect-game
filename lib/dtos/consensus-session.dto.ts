export type ConsensusSessionDto =  {
  sessionid: number,
  sessiontype: number,
  rankinglimit: number,
  title: string,
  description: string,
  sessionstatus: number | null,
  modifiedbyid: number,
  created: Date,
  updated: Date,
};
