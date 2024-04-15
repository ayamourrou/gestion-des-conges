import { sign, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import DataBase from "../db/DataBase";
import sequelize from "sequelize";

const JWT_KEY = "kamal2003";

export const generateToken = (id: string) => {
  return sign({ id }, JWT_KEY, {
    expiresIn: "30d",
  });
};

export const authGuard = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decodedToken = verify(token, JWT_KEY);
      const users = await DataBase.query("select id_user,statue_user,nom,prenom,cin,id_compte,userId,username,password,email from Users INNER JOIN Comptes ON id_user = userId WHERE id_compte =?", {
        replacements: [JSON.parse(JSON.stringify(decodedToken)).id],
        type: sequelize.QueryTypes.SELECT,
      });

      if (users.length >= 0) {
        req.user = users[0];
        next();
      } else {
        console.log("MAYBE");
        res.status(401).send({});
        console.error("User not found");
      }
    } catch (error) {
      res.status(401).send({});
      console.error("Invalid authorization " + error);
    }
  } else {
    res.status(401).send({});
    console.error("No token found");
  }
};
