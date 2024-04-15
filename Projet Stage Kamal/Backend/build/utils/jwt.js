"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const DataBase_1 = __importDefault(require("../db/DataBase"));
const sequelize_1 = __importDefault(require("sequelize"));
const JWT_KEY = "kamal2003";
const generateToken = (id) => {
    return (0, jsonwebtoken_1.sign)({ id }, JWT_KEY, {
        expiresIn: "30d",
    });
};
exports.generateToken = generateToken;
const authGuard = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decodedToken = (0, jsonwebtoken_1.verify)(token, JWT_KEY);
            const users = await DataBase_1.default.query("select id_user,statue_user,nom,prenom,cin,id_compte,userId,username,password,email from Users INNER JOIN Comptes ON id_user = userId WHERE id_compte =?", {
                replacements: [JSON.parse(JSON.stringify(decodedToken)).id],
                type: sequelize_1.default.QueryTypes.SELECT,
            });
            if (users.length >= 0) {
                req.user = users[0];
                next();
            }
            else {
                console.log("MAYBE");
                res.status(401).send({});
                console.error("User not found");
            }
        }
        catch (error) {
            res.status(401).send({});
            console.error("Invalid authorization " + error);
        }
    }
    else {
        res.status(401).send({});
        console.error("No token found");
    }
};
exports.authGuard = authGuard;
