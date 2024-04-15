export interface User {
    id_user: string;
    statue_user: string;
    nom: string;
    prenom: string;
    cin: string;
}

export interface Compte {
    id_compte: string;
    userId: string;
    username: string;
    password: string;
    email: string;
}

export interface EditeUserResponse {
    user?: User;
    compte?: Compte;
    msg: string;
    status: 200;
}
