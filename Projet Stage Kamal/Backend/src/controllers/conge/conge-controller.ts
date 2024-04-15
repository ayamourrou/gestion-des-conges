import { Request, Response } from "express";
import Conges from "../../models/conge";
import { v4 as uuidv4 } from "uuid";
import Users from "../../models/user";
import DataBase from "../../db/DataBase";

class CongeClass {
  /* ADMIN FUNCTION */
  public static GereConge = async (req: Request, res: Response) => {
    const { id_conge } = req.body;
    const { statue_conge } = req.body;
    try {
      const conge = await Conges.findOne({ where: { id_conge } });
      if (!conge) {
        return res.json({ msg: "Can not find existing Conge", status: 401 });
      }
      const updateConge = await conge.update({ statue_conge: statue_conge });
      return res.json({ conge: updateConge, msg: "Conge Successfully Updated", status: 200 });
    } catch (error) {
      return res.json({ msg: "fail to Update Conge : " + error, status: 500, route: "/" });
    }
  };
  /* USER FUNCTION */
  public static CreeConge = async (req: Request, res: Response) => {
    /* VALUES THAT USER DON'T GIVE AS */
    const id_conge = uuidv4();
    const statue_conge: string = "response";
    /* END VALUES THAT USER DON'T GIVE AS */

    /* Gite From Body Values */
    const { userId } = req.user;
    const { dateDebut, dateFin } = req.body;
    const { id_user } = req.user;
    /* Here we Are Cheking If The User Exist In Table Users */
    const user = await Users.findOne({ where: { id_user } });
    if (!user) {
      return res.json({ msg: "Can not find existing User", status: 401 });
    }
    try {
      const conge = await Conges.create({ id_conge, userId, statue_conge, dateDebut, dateFin });
      return res.json({ conge, msg: "Conge Create Successfully", statue: 200, route: "/" });
    } catch (error) {
      return res.json({ msg: "Fail to Create Conge : " + error, statue: 500, route: "/" });
    }
  };

  public static DeleteConge = async (req: Request, res: Response) => {
    try {
      const { id_conge } = req.params;
      const conge = await Conges.findOne({ where: { id_conge } });
      if (!conge) {
        return res.json({ msg: "Can not find existing Conge", status: 401 });
      }
      const deleteConge = await conge.destroy();
      return res.json({ user: deleteConge, msg: "Conge Successfully Deleted", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail to Delete Conge " + error, status: 500, route: "/" });
    }
  };

  /* ADMIN CARDS NUMBER FUNCTION */
  public static GetNbCongeA = async (req: Request, res: Response) => {
    try {
      const result: any = await DataBase.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'accept'");
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Conge Accepte", status: 401 });
      }
      const CongeCountA = result[0][0].CongeCountA;
      return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Accepte", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Conge Accepte", status: 500 });
    }
  };
  public static GetNbCongeW = async (req: Request, res: Response) => {
    try {
      const result: any = await DataBase.query("SELECT COUNT(id_conge) AS CongeCountW from Conges WHERE Conges.statue_conge LIKE 'waiting'");
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 401 });
      }
      const CongeCountW = result[0][0].CongeCountW;
      return res.json({ NbUsers: CongeCountW, msg: "Successfully Get Nb Conge Waiting", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 500 });
    }
  };
  public static GetNbCongeR = async (req: Request, res: Response) => {
    try {
      const result: any = await DataBase.query("SELECT COUNT(id_conge) AS CongeCountR from Conges WHERE Conges.statue_conge LIKE 'refuse'");
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Conge Refuse", status: 401 });
      }
      const CongeCountR = result[0][0].CongeCountR;
      return res.json({ NbUsers: CongeCountR, msg: "Successfully Get Nb Conge Refuse", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Conge Refuse", status: 500 });
    }
  };

  /* USER CARDS NUMBER FUNCTION */
  public static GetNbCongeAUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const result: any = await DataBase.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'accept' And Conges.userId=?", { replacements: [userId] });
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Conge Accepte", status: 401 });
      }
      const CongeCountA = result[0][0].CongeCountA;
      return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Accepte", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Conge Accepte " + error, status: 500 });
    }
  };
  public static GetNbCongeRUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const result: any = await DataBase.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'refuse' And Conges.userId=?", { replacements: [userId] });
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Conge Refuse", status: 401 });
      }
      const CongeCountA = result[0][0].CongeCountA;
      return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Refuse", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Conge Refuse " + error, status: 500 });
    }
  };
  public static GetNbCongeWUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const result: any = await DataBase.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'waiting' And Conges.userId=?", { replacements: [userId] });
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 401 });
      }
      const CongeCountA = result[0][0].CongeCountA;
      return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Waiting", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Conge Waiting " + error, status: 500 });
    }
  };
  public static GetNbCongeRSUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.user;
      const result: any = await DataBase.query("SELECT COUNT(id_conge) AS CongeCountA from Conges WHERE Conges.statue_conge LIKE 'response' And Conges.userId=?", { replacements: [userId] });
      if (!result) {
        return res.json({ msg: "Fail To Get Nb Conge Waiting", status: 401 });
      }
      const CongeCountA = result[0][0].CongeCountA;
      return res.json({ NbUsers: CongeCountA, msg: "Successfully Get Nb Conge Waiting", status: 200 });
    } catch (error) {
      return res.json({ msg: "Fail To Get Nb Conge Waiting " + error, status: 500 });
    }
  };
}

export default CongeClass;
