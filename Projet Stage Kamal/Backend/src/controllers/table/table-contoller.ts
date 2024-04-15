import { Response, Request } from "express";
import Conges from "../../models/conge";
import { Op } from "sequelize";
import DataBase from "../../db/DataBase";

class TablesClass {
  /* ADMIN FUNCTION */
  public static GetTableUser = async (req: Request, res: Response) => {
    try {
      const user_info = await DataBase.query(`
      select id_user,statue_user,nom,prenom,cin,username,password,email from Users 
      INNER JOIN Comptes ON id_user=userId`);
      return res.json({ user_info: user_info[0], msg: "Successfully GetTable User-Compte", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable User-Compte " + error, status: 500, route: "/" });
    }
  };
  /* GetTableCongeRESPONSE */
  public static GetTableCongeRESPONSE = async (req: Request, res: Response) => {
    try {
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'response'`
      );
      return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable CongeRESPONSE " + error, status: 500, route: "/" });
    }
  };
  /* GetTableCongeAccept */
  public static GetTableCongeAccept = async (req: Request, res: Response) => {
    try {
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'accept'`
      );
      return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable CongeAccept", status: 500, route: "/" });
    }
  };
  /* GetTableCongeRefuse */
  public static GetTableCongeRefuse = async (req: Request, res: Response) => {
    try {
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'refuse'`
      );
      return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable CongeRefuse", status: 500, route: "/" });
    }
  };
  /* GetTableCongeWaiting */
  public static GetTableCongeWaiting = async (req: Request, res: Response) => {
    try {
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'waiting'`
      );
      return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable CongeWaiting", status: 500, route: "/" });
    }
  };

  /* USER FUNCTION */
  public static GetTableCongeAcceptUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'accept' and userId=?`,
        { replacements: [userId] }
      );
      if (!conges) {
        return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
      }
      return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable CongeAcceptUser " + error, status: 500, route: "/" });
    }
  };
  public static GetTableCongeRefuseUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'refuse' and userId=?`,
        { replacements: [userId] }
      );
      if (!conges) {
        return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
      }
      return res.json({ conges: conges[0], msg: "Successfully GetTable Conge", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable CongeRefuseUser " + error, status: 500, route: "/" });
    }
  };
  public static GetTableCongeWaitingUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'waiting' and userId=?`,
        { replacements: [userId] }
      );
      if (!conges) {
        return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
      }
      return res.json({ conges: conges[0], msg: "Successfully GetTable CongeWaitingUser", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable Conge", status: 500, route: "/" });
    }
  };
  public static GetTableCongeResponseUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const conges = await DataBase.query(
        `Select id_conge,nom,prenom,statue_conge,dateDebut,dateFin from Conges 
        INNER JOIN Users ON id_user=userId where statue_conge Like 'response' and userId=?`,
        { replacements: [userId] }
      );
      if (!conges) {
        return res.json({ msg: "Can not find existing User", status: 401, route: "/" });
      }
      return res.json({ conges: conges[0], msg: "Successfully GetTable CongeResponseUser", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to GetTable Conge", status: 500, route: "/" });
    }
  };
}

export default TablesClass;
