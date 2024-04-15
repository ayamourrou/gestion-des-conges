import { DataTypes, ForeignKey, Model } from "sequelize";
import Users from "./user";
import DataBase from "../db/DataBase";

interface DataConge {
  id_conge: string;
  userId: string;
  statue_conge: string;
  dateDebut: string;
  dateFin: string;
}

class Conges extends Model<DataConge> {
  declare userId: ForeignKey<Users["id_user"]>;
}

Conges.init(
  {
    id_conge: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    statue_conge: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateDebut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateFin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: DataBase,
    modelName: "Conges",
    tableName: "Conges",
    timestamps: false,
  }
);

export default Conges;
