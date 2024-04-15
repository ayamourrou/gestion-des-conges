export interface DeleteUser {
  id_user: string;
  statue_user: string;
  nom: string;
  prenom: string;
  cin: string;
}

export interface DeleteUserResponse {
  user?: DeleteUser;
  msg: string;
  status: number;
}
