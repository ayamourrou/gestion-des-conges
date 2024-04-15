"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = __importDefault(require("../../db/DataBase"));
class TablesClass {
    /* ADMIN FUNCTION */
    static GetTableUser = async (req, res) => {
        try {
            const user_info = await DataBase_1.default.query(`
      select id_user,statue_user,nom,prenom,cin,username,password,email from Users 
      INNER JOIN Comptes ON id_user=userId`);
            return res.json({ user_info: user_info[0], msg: "Successfully GetTable User-Compte", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable User-Compte " + error, status: 500, route: "/" });
        }
    };
    /* GetTableCongeRESPONSE */
    static GetTableCongeRESPONSE = async (req, res) => {
        try {
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'response'`);
            return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable CongeRESPONSE " + error, status: 500, route: "/" });
        }
    };
    /* GetTableCongeAccept */
    static GetTableCongeAccept = async (req, res) => {
        try {
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'accept'`);
            return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable CongeAccept", status: 500, route: "/" });
        }
    };
    /* GetTableCongeRefuse */
    static GetTableCongeRefuse = async (req, res) => {
        try {
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'refuse'`);
            return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable CongeRefuse", status: 500, route: "/" });
        }
    };
    /* GetTableCongeWaiting */
    static GetTableCongeWaiting = async (req, res) => {
        try {
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'waiting'`);
            return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable CongeWaiting", status: 500, route: "/" });
        }
    };
    /* USER FUNCTION */
    static GetTableCongeAcceptUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'accept' and userId=?`, { replacements: [userId] });
            if (!conges) {
                return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
            }
            return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable CongeAcceptUser " + error, status: 500, route: "/" });
        }
    };
    static GetTableCongeRefuseUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'refuse' and userId=?`, { replacements: [userId] });
            if (!conges) {
                return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
            }
            return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable CongeRefuseUser " + error, status: 500, route: "/" });
        }
    };
    static GetTableCongeWaitingUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'waiting' and userId=?`, { replacements: [userId] });
            if (!conges) {
                return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
            }
            return res.json({ conges: conges[0], msg: "Successfully GetTable CongeWaitingUser", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable Conge", status: 500, route: "/" });
        }
    };
    static GetTableCongeResponseUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const conges = await DataBase_1.default.query(`Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'response' and userId=?`, { replacements: [userId] });
            if (!conges) {
                return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
            }
            return res.json({ conges: conges[0], msg: "Successfully GetTable CongeResponseUser", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to GetTable Conge", status: 500, route: "/" });
        }
    };
}
exports.default = TablesClass;
