import sequelize, { Association, CreateOptions, CreationOptional, DataTypes, ForeignKey, NumberDataType } from "sequelize";
import { Model } from "sequelize";
import DataBase from "../db/DataBase";
import Users from "./user";
import { UUID } from "crypto";

interface DataCompte {
  id_compte: string;
  userId: string;
  username: string;
  password: string;
  email: string;
}

class Compte extends Model<DataCompte> {
  declare id_compte: string;
  declare userId: ForeignKey<Users["id_user"]>;
}

Compte.init(
  {
    id_compte: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: DataBase,
    modelName: "Compte",
    tableName: "Comptes",
    timestamps: false,
  }
);

export default Compte;
