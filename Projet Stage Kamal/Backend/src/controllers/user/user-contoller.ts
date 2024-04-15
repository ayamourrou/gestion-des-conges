import { Request, Response, response } from "express";
import Users from "../../models/user";
import { v4 as uuidv4 } from "uuid";
import Compte from "../../models/compte";
import DataBase from "../../db/DataBase";

class UserClass {
  /* ADMIN FUNCTION */
  // Here we are Crating the user and add to the dataBase
  public static AddUser = async (req: Request, res: Response) => {
    // console.log(req.body); it just for test
    const id_user = uuidv4();
    const { nom, prenom, cin, statue_user } = req.body;
    const userId = id_user;
    const id_compte = uuidv4();
    try {
      const user = await Users.create({ id_user, statue_user, nom, prenom, cin });
      const compte = await Compte.create({ ...req.body, id_compte, userId });
      return res.json({ user, compte, msg: "Successfully create User", status: 200 });
    } catch (error: any) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.json({ msg: "User Already Exists", status: 500, route: "/" });
      }
      return res.json({ msg: "Fail to Add User", status: 500, route: "/" });
    }
  };
  // Here we are Editing the user info
  public static EditUser = async (req: Request, res: Response) => {
    try {
      const { id_user } = req.body;
      const { nom, prenom, cin, email, username, password, statue_user } = req.body;
      const user = await Users.findOne({ where: { id_user } });
      const userId = id_user;
      const compte = await Compte.findOne({ where: { userId } });
      if (!user || !compte) {
        return res.json({ msg: "Can not find existing User ", status: 401 });
      }
      const updateUser = await user.update({ nom: nom, statue_user: statue_user, prenom: prenom, cin: cin });
      const updateCompte = await compte.update({ username: username, password: password, email: email });
      return res.json({ user: updateUser, compte: updateCompte, msg: "User Successfully Updated", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to Edit User : " + error, status: 500, route: "/" });
    }
  };
  // Here we are Deleteing the user from the database
  public static DeleteUser = async (req: Request, res: Response) => {
    try {
      const { id_user } = req.params;
      const user = await Users.findOne({ where: { id_user } });
      if (!user) {
        return res.json({ msg: "Can not find existing User", status: 401 });
      }
      const deleteUser = await user.destroy();
      return res.json({ user: deleteUser, msg: "User Successfully Deleted", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to Delete User " + error, status: 500, route: "/" });
    }
  };

  /* USER FUNCTION */
  public static GetNbUsers = async (req: Request, res: Response) => {
    try {
      const result: any = await DataBase.query("SELECT COUNT(id_user) AS userCount from Users");
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Users", status: 401 });
      }
      const userCount = result[0][0].userCount;
      return res.json({ NbUsers: userCount, msg: "Successfully Get Nb Users", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Users", status: 500 });
    }
  };

  public static FindCIN = async (req: Request, res: Response) => {
    try {
      const { cin } = req.body;
      const user = await Users.findOne({ where: { cin } });
      if (!user) {
        return res.json({ msg: "User Doesn't Exists", status: 401 });
      }
      return res.json({ user, msg: "User Successfully Finded", status: 200 });
    } catch (error) {
      return res.json({ msg: "User Doesn't Exists", status: 500 });
    }
  };

  public static ResetPassword = async (req: Request, res: Response) => {
    try {
      const { cin, password } = req.body;
      const user = await Users.findOne({ where: { cin } });
      const userId = user?.id_user;
      const passwordreset = await DataBase.query("UPDATE Comptes SET password=? WHERE userId=?", { replacements: [password, userId] });
      if (!passwordreset) {
        return res.json({ msg: "Fail To Update Password", status: 401 });
      }
      return res.json({ msg: "Password Successfully Updated", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Update Password " + error, status: 500 });
    }
  };

  public static GetInfoUser = async (req: Request, res: Response) => {
    try {
      const userinfo = req.user;
      if (!userinfo) {
        return res.json({ msg: "Fail to Get User Info", status: 401 });
      }
      return res.json({ userinfo, msg: "Info User Geted Successfully", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail to Get User Info", status: 500 });
    }
  };
}

export default UserClass;
