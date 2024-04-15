export interface GetNbUser {
  COUNT_id_user: number;
}
export interface GetNbUserResponde {
  NbUsers?: GetNbUser;
  msg: string;
  status: number;
}
