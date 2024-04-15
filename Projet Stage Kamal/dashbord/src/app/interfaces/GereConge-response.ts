export interface GereConge {
    id_conge: string;
    userId: string;
    statue_conge: string;
    dateDebut: string;
    dateFin: string;
}

export interface GereCongeResponse {
    conge?: GereConge;
    msg: string;
    status: number;
}
