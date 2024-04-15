import { body, param } from "express-validator";

class TableValidator {
  public static check_GetTableCongeAcceptUser = () => {
    return [body("userId").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
  };
  public static check_GetTableCongeRefuseUser = () => {
    return [body("userId").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
  };
  public static check_GetTableCongeWaitingUser = () => {
    return [body("userId").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
  };
}

export default TableValidator;
