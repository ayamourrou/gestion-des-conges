export interface User {
  cin: string;
  email: string;
  id_compte: string;
  id_user: string;
  nom: string;
  password: string;
  prenom: string;
  statue_user: string;
  userId: string;
  username: string;
}

export interface UserInfoResponse {
  userinfo?: User;
  msg: string;
  status: string;
}
