export interface User {
  id_user: string;
  statue_user: string;
  nom: string;
  prenom: string;
  cin: string;
}

export interface FindCinResponse {
  user?: User;
  msg: string;
  status: number;
}
