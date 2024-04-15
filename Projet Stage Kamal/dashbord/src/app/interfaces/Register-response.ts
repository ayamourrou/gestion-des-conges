export interface User {
  statue_user: string;
  nom: string;
  prenom: string;
  cin: string;
  id_user: string;
}

export interface Compte {
  username: string;
  password: string;
  email: string;
  id_compte: string;
  userId: string;
}

export interface RegisterResponse {
  user?: User;
  compte?: Compte;
  msg: string;
  status: number;
}
