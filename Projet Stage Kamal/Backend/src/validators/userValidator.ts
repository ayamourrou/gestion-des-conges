import { body, param } from "express-validator";

class UserValidator {
  public static checkAddUser = () => {
    return [
      body("id_user").optional().isUUID(4).withMessage("The id value should be UUID v4"),
      body("statue_user").isString().notEmpty().withMessage("The user statue value should not be empty"),
      body("nom").isString().notEmpty().withMessage("The Nom value should not be empty"),
      body("prenom").isString().notEmpty().withMessage("The Prenom value should not be empty"),
      body("cin").isString().notEmpty().withMessage("The Cin value should not be empty"),
    ];
  };
  public static checkIdBody() {
    return [body("id_user").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
  }

  public static checkCINBody() {
    return body("cin").isString().notEmpty().withMessage("The Cin value should not be empty");
  }

  public static checkCINPasswordBody() {
    return [body("cin").isString().notEmpty().withMessage("The Cin value should not be empty"), body("password").isString().notEmpty().withMessage("The Password value should not be empty")];
  }
}

export default UserValidator;
