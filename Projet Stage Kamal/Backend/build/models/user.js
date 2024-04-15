"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DataBase_1 = __importDefault(require("../db/DataBase"));
const compte_1 = __importDefault(require("./compte"));
const conge_1 = __importDefault(require("./conge"));
class Users extends sequelize_1.Model {
}
Users.init({
    id_user: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    statue_user: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cin: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: DataBase_1.default,
    modelName: "Users",
    tableName: "Users",
    timestamps: false,
});
Users.hasOne(compte_1.default, {
    sourceKey: "id_user",
    foreignKey: "userId",
    as: "comptes",
});
Users.hasMany(conge_1.default, {
    sourceKey: "id_user",
    foreignKey: "userId",
    as: "conges",
});
exports.default = Users;
