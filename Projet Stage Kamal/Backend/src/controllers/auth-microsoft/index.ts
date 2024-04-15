import { NextFunction, Request, Response } from "express";
import authProvider from "../../config/auth/AuthProvider";

import { REDIRECT_URI, POST_LOGOUT_REDIRECT_URI } from "../../config/authConfig";

class MicrosoftAuthController {
  public static Login = async (req: Request, res: Response, next: NextFunction) => {
    return authProvider.login({
      scopes: [],
      redirectUri: REDIRECT_URI,
      successRedirect: "/",
    })(req, res, next);
  };

  public static AcquireToken = async (req: Request, res: Response, next: NextFunction) => {
    return authProvider.acquireToken({
      scopes: ["User.Read"],
      redirectUri: REDIRECT_URI,
      successRedirect: "/",
    })(req, res, next);
  };

  public static RedirectHandle = async (req: Request, res: Response, next: NextFunction) => {
    return authProvider.handleRedirect()(req, res, next);
  };

  public static Logout = async (req: Request, res: Response, next: NextFunction) => {
    return authProvider.logout({
      postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
    })(req, res, next);
  };
}

export default MicrosoftAuthController;
