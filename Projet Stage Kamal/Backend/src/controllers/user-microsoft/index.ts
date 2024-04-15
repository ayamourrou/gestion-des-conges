import { NextFunction, Request, Response } from "express";
import { GRAPH_ME_ENDPOINT } from "../../config/authConfig";

import { fetch } from "../../utils/fetch";

class UserMSController {
  public static GetID = async (req: any, res: Response, next: NextFunction) => {
    res.render("id", { idTokenClaims: req.session.account.idTokenClaims });
  };
  public static GetProfile = async (req: any, res: Response, next: NextFunction) => {
    try {
      const graphResponse = await fetch(GRAPH_ME_ENDPOINT, req.session.accessToken);
      res.render("profile", { profile: graphResponse });
    } catch (error) {
      next(error);
    }
  };
}
export default UserMSController;
