import { body } from "express-validator";

class AuthValidator {
  public static check_auth_Login = () => {
    return [
      body("username").isString().notEmpty().withMessage("The Username value should not be empty"),
      body("password").isString().notEmpty().withMessage("The Password value should not be empty"),
    ];
  };
  public static ckeck_auth_register = () => {
    return [
      body("id_user").optional().isUUID(4).withMessage("The id value should be UUID v4"),
      body("id_compte").optional().isUUID(4).withMessage("The id value should be UUID v4"),
      body("nom").notEmpty().isString().withMessage("The Nom value should not be empty"),
      body("prenom").notEmpty().isString().withMessage("The Prenom value should not be empty"),
      body("cin").notEmpty().isString().withMessage("The Cin value should not be empty"),
      body("username").notEmpty().isString().withMessage("The Username value should not be empty"),
      body("password").notEmpty().isString().withMessage("The Password value should not be empty"),
      body("email").notEmpty().isString().withMessage("The Email value should not be empty"),
    ];
  };
}

export default AuthValidator;
