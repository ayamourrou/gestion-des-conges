export interface Conge {
  id_conge: string;
  nom: string;
  prenom: string;
  statue_conge: string;
  dateDebut: string;
  dateFin: string;
}

export interface CongeResponse {
  conges?: Conge[];
  msg: string;
  status: number;
}
