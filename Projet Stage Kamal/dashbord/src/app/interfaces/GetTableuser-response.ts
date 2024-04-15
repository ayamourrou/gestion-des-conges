export interface GetTableUser {
    id_user: string;
    statue_user: string;
    nom: string;
    prenom: string;
    cin: string;
    username: string;
    password: string;
    email: string;
}

export interface GetTableUserResponse {
    user_info?: GetTableUser[];
    msg: string;
    status: number;
}
