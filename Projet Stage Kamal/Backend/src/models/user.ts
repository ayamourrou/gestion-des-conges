import { Association, CreationOptional, DataTypes, Model } from "sequelize";
import DataBase from "../db/DataBase";
import Compte from "./compte";
import Conges from "./conge";

interface UserData {
  id_user: string;
  statue_user: string;
  nom: string;
  prenom: string;
  cin: string;
}

class Users extends Model<UserData> {
  declare id_user: CreationOptional<number>;
  declare static associations: {
    comptes: Association<Users, Compte>;
    conges: Association<Users, Conges>;
  };
}

Users.init(
  {
    id_user: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    statue_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cin: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: DataBase,
    modelName: "Users",
    tableName: "Users",
    timestamps: false,
  }
);

Users.hasOne(Compte, {
  sourceKey: "id_user",
  foreignKey: "userId",
  as: "comptes",
});

Users.hasMany(Conges, {
  sourceKey: "id_user",
  foreignKey: "userId",
  as: "conges",
});

export default Users;
