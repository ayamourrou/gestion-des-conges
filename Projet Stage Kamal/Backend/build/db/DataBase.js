"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbPatch = "C:\\Users\\kamal\\Desktop\\Projet Stage\\Backend\\dashbord.sqlite";
// const DataBase = new Sequelize("dashbord", "", "", {
const DataBase = new sequelize_1.Sequelize("dashbord", "", "", {
    dialect: "sqlite",
    storage: dbPatch,
    logging: false,
});
exports.default = DataBase;
