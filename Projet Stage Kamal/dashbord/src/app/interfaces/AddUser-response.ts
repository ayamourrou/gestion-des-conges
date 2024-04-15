export interface AddUser {
    id_user: string;
    statue_user: string;
    nom: string;
    prenom: string;
    cin: string;
}

export interface AddCompte {
    email: string;
    username: string;
    password: string;
    id_compte: string;
    userId: string;
}

export interface AddUserResponse {
    user?: AddUser;
    compte?: AddCompte;
    msg: string;
    status: number;
}
