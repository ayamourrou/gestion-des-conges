import { NextFunction, Request, Response } from "express";

class isAuthenticatedClass {
  public static isAuthenticated = async (req: any, res: Response, next: NextFunction) => {
    if (!req.session.isAuthenticated) {
      return res.redirect("/auth/signin"); // redirect to sign-in route
    }
    next();
  };
}

export default isAuthenticatedClass;
