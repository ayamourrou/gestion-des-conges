"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DataBase_1 = __importDefault(require("../db/DataBase"));
class Conges extends sequelize_1.Model {
}
Conges.init({
    id_conge: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
    },
    statue_conge: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dateDebut: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    dateFin: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: DataBase_1.default,
    modelName: "Conges",
    tableName: "Conges",
    timestamps: false,
});
exports.default = Conges;
