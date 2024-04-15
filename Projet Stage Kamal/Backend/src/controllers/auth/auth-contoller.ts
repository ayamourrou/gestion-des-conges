import { Request, Response } from "express";
import Users from "../../models/user";
import { v4 as uuidv4 } from "uuid";
import Compte from "../../models/compte";
import { generateToken } from "../../utils/jwt";
import DataBase from "../../db/DataBase";
import { QueryTypes } from "sequelize";

class Authentication {
  // Here we are Login by using Username and PassWord
  public static auth_Login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user_info = await DataBase.query(
        "select id_user,statue_user,nom,prenom,cin,id_compte,userId,username,password,email from Users INNER JOIN Comptes ON id_user = userId where username =? and password =?",
        { replacements: [username, password] }
      );

      /* FOR TOKEN */
      const user_compte = await Compte.findOne({ where: { username, password } });
      /* END FOR TOKEN */
      if (!user_compte || !user_info) {
        return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
      }
      return res.json({ user_info: user_info[0][0], msg: "User Successfully Login", status: 200, token: generateToken(user_compte!.id_compte as string) });
    } catch (error) {
      return res.json({ msg: "fail to Login " + error, status: 500, route: "/" });
    }
  };
  // Here we are Register User
  public static auth_register = async (req: Request, res: Response) => {
    /* VALUES THAT USER DON'T GIVE AS */
    const id_user = uuidv4();
    const userId = id_user;
    const id_compte = uuidv4();
    const statue_user: string = "user";
    /* END VALUES THAT USER DON'T GIVE AS */
    const { nom, prenom, cin } = req.body;
    try {
      const user = await Users.create({ statue_user, nom, prenom, cin, id_user });
      const compte = await Compte.create({ ...req.body, id_compte, userId });
      return res.json({ user, compte, msg: "User Successfully Register", status: 200 });
    } catch (error: any) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.json({ msg: "User Already Exists", status: 500, route: "/" });
      }
      return res.json({ msg: "Fail to Register User : " + error, status: 500, route: "/" });
    }
  };

  public static AuthTest = async (req: Request, res: Response) => {
    return res.json({ msg: "User IN", status: 200, data: { isAuth: true, authStatus: req.user.statue_user } });
  };
}

export default Authentication;
