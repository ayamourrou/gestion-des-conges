"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../models/user"));
const uuid_1 = require("uuid");
const compte_1 = __importDefault(require("../../models/compte"));
const jwt_1 = require("../../utils/jwt");
const DataBase_1 = __importDefault(require("../../db/DataBase"));
class Authentication {
    // Here we are Login by using Username and PassWord
    static auth_Login = async (req, res) => {
        try {
            const { username, password } = req.body;
            const user_info = await DataBase_1.default.query("select id_user,statue_user,nom,prenom,cin,id_compte,userId,username,password,email from Users INNER JOIN Comptes ON id_user = userId where username =? and password =?", { replacements: [username, password] });
            /* FOR TOKEN */
            const user_compte = await compte_1.default.findOne({ where: { username, password } });
            /* END FOR TOKEN */
            if (!user_compte || !user_info) {
                return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
            }
            return res.json({ user_info: user_info[0][0], msg: "User Successfully Login", status: 200, token: (0, jwt_1.generateToken)(user_compte.id_compte) });
        }
        catch (error) {
            return res.json({ msg: "fail to Login " + error, status: 500, route: "/" });
        }
    };
    // Here we are Register User
    static auth_register = async (req, res) => {
        /* VALUES THAT USER DON'T GIVE AS */
        const id_user = (0, uuid_1.v4)();
        const userId = id_user;
        const id_compte = (0, uuid_1.v4)();
        const statue_user = "user";
        /* END VALUES THAT USER DON'T GIVE AS */
        const { nom, prenom, cin } = req.body;
        try {
            const user = await user_1.default.create({ statue_user, nom, prenom, cin, id_user });
            const compte = await compte_1.default.create({ ...req.body, id_compte, userId });
            return res.json({ user, compte, msg: "User Successfully Register", status: 200 });
        }
        catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.json({ msg: "User Already Exists", status: 500, route: "/" });
            }
            return res.json({ msg: "Fail to Register User : " + error, status: 500, route: "/" });
        }
    };
    static AuthTest = async (req, res) => {
        return res.json({ msg: "User IN", status: 200, data: { isAuth: true, authStatus: req.user.statue_user } });
    };
}
exports.default = Authentication;
