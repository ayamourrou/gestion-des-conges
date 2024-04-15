"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conge_1 = __importDefault(require("../../models/conge"));
const uuid_1 = require("uuid");
const user_1 = __importDefault(require("../../models/user"));
const DataBase_1 = __importDefault(require("../../db/DataBase"));
class CongeClass {
    /* ADMIN FUNCTION */
    static GereConge = async (req, res) => {
        const { id_conge } = req.body;
        const { statue_conge } = req.body;
        try {
            const conge = await conge_1.default.findOne({ where: { id_conge } });
            if (!conge) {
                return res.json({ msg: "Can not find existing Conge", status: 401 });
            }
            const updateConge = await conge.update({ statue_conge: statue_conge });
            return res.json({ conge: updateConge, msg: "Conge Successfully Updated", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "fail to Update Conge : " + error, status: 500, route: "/" });
        }
    };
    /* USER FUNCTION */
    static CreeConge = async (req, res) => {
        /* VALUES THAT USER DON'T GIVE AS */
        const id_conge = (0, uuid_1.v4)();
        const statue_conge = "response";
        /* END VALUES THAT USER DON'T GIVE AS */
        /* Gite From Body Values */
        const { userId } = req.user;
        const { dateDebut, dateFin } = req.body;
        const { id_user } = req.user;
        /* Here we Are Cheking If The User Exist In Table Users */
        const user = await user_1.default.findOne({ where: { id_user } });
        if (!user) {
            return res.json({ msg: "Can not find existing User", status: 401 });
        }
        try {
            const conge = await conge_1.default.create({ id_conge, userId, statue_conge, dateDebut, dateFin });
            return res.json({ conge, msg: "Conge Create Successfully", statue: 200, route: "/" });
        }
        catch (error) {
            return res.json({ msg: "Fail to Create Conge : " + error, statue: 500, route: "/" });
        }
    };
    static DeleteConge = async (req, res) => {
        try {
            const { id_conge } = req.params;
            const conge = await conge_1.default.findOne({ where: { id_conge } });
            if (!conge) {
                return res.json({ msg: "Can not find existing Conge", status: 401 });
            }
            const deleteConge = await conge.destroy();
            return res.json({ user: deleteConge, msg: "Conge Successfully Deleted", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail to Delete Conge " + error, status: 500, route: "/" });
        }
    };
    /* ADMIN CARDS NUMBER FUNCTION */
    static GetNbCongeA = async (req, res) => {
        try {
            const result = await DataBase_1.default.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'accept'");
            if (!result) {
                return res.json({ msg: "Fail To Get Nb Conge Accepte", status: 401 });
            }
            const CongeCountA = result[0][0].CongeCountA;
            return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Accepte", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail To Get Nb Conge Accepte", status: 500 });
        }
    };
    static GetNbCongeW = async (req, res) => {
        try {
            const result = await DataBase_1.default.query("SELECT COUNT(id_conge) AS CongeCountW from Conges WHERE Conges.statue_conge LIKE 'waiting'");
            if (!result) {
                return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 401 });
            }
            const CongeCountW = result[0][0].CongeCountW;
            return res.json({ NbUsers: CongeCountW, msg: "Successfully Get Nb Conge Waiting", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 500 });
        }
    };
    static GetNbCongeR = async (req, res) => {
        try {
            const result = await DataBase_1.default.query("SELECT COUNT(id_conge) AS CongeCountR from Conges WHERE Conges.statue_conge LIKE 'refuse'");
            if (!result) {
                return res.json({ msg: "Fail To Get Nb Conge Refuse", status: 401 });
            }
            const CongeCountR = result[0][0].CongeCountR;
            return res.json({ NbUsers: CongeCountR, msg: "Successfully Get Nb Conge Refuse", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail To Get Nb Conge Refuse", status: 500 });
        }
    };
    /* USER CARDS NUMBER FUNCTION */
    static GetNbCongeAUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const result = await DataBase_1.default.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'accept' And Conges.userId=?", { replacements: [userId] });
            if (!result) {
                return res.json({ msg: "Fail To Get Nb Conge Accepte", status: 401 });
            }
            const CongeCountA = result[0][0].CongeCountA;
            return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Accepte", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail To Get Nb Conge Accepte " + error, status: 500 });
        }
    };
    static GetNbCongeRUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const result = await DataBase_1.default.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'refuse' And Conges.userId=?", { replacements: [userId] });
            if (!result) {
                return res.json({ msg: "Fail To Get Nb Conge Refuse", status: 401 });
            }
            const CongeCountA = result[0][0].CongeCountA;
            return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Refuse", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail To Get Nb Conge Refuse " + error, status: 500 });
        }
    };
    static GetNbCongeWUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const result = await DataBase_1.default.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'waiting' And Conges.userId=?", { replacements: [userId] });
            if (!result) {
                return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 401 });
            }
            const CongeCountA = result[0][0].CongeCountA;
            return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Waiting", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail To Get Nb Conge Waiting " + error, status: 500 });
        }
    };
    static GetNbCongeRSUser = async (req, res) => {
        try {
            const { userId } = req.user;
            const result = await DataBase_1.default.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'response' And Conges.userId=?", { replacements: [userId] });
            if (!result) {
                return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 401 });
            }
            const CongeCountA = result[0][0].CongeCountA;
            return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Waiting", status: 200 });
        }
        catch (error) {
            return res.json({ msg: "Fail To Get Nb Conge Waiting " + error, status: 500 });
        }
    };
}
exports.default = CongeClass;
