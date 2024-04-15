import { body, param } from "express-validator";

class CongeValidator {
  public static check_GereConge = () => {
    return [
      body("id_conge").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4"),
      body("statue_conge").isString().notEmpty().withMessage("The conge statue value should not be empty"),
    ];
  };
  public static check_CreeConge = () => {
    return [
      body("id_conge").optional().isUUID(4).withMessage("The id value should be UUID v4"),
      body("userId").isUUID(4).notEmpty().withMessage("The id value should be UUID v4"),
      body("dateDebut").isDate().notEmpty().withMessage("The dateDebut value should not be empty"),
      body("dateFin").isDate().notEmpty().withMessage("The dateFin value should not be empty"),
    ];
  };

  public static check_userId = () => {
    return [body("userId").isUUID(4).notEmpty().withMessage("The id value should be UUID v4")];
  };
}

export default CongeValidator;
