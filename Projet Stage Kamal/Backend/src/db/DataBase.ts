import path from "path";
import { Sequelize } from "sequelize";

const dbPatch =
  "C:\\Users\\kamal\\Desktop\\Projet Stage\\Backend\\dashbord.sqlite";

// const DataBase = new Sequelize("dashbord", "", "", {

const DataBase = new Sequelize("dashbord", "", "", {
  dialect: "sqlite",
  storage: dbPatch,
  logging: false,
});

export default DataBase;
