export interface User_Info {
  id_user: string;
  statue_user: string;
  nom: string;
  prenom: string;
  cin: string;
  id_compte: string;
  userId: string;
  username: string;
  password: string;
  email: string;
}

export interface LoginResponse {
  user_info?: User_Info;
  msg: string;
  status: number;
  route?: string;
  token?: string;
}
