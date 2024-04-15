import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

class MiddlewareValidator {
  // This is The call Back function of the UserValidator.checkAddUser that hanle Error
  public static handleUserValidatorError = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json({ error, status: 401 });
    }
    next();
  };
}

export default MiddlewareValidator;
