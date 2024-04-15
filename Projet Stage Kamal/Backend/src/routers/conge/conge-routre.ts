import { Router } from "express";
import CongeValidator from "../../validators/congeValidator";
import MiddlewareValidator from "../../validators/middlewareValidator";
import CongeClass from "../../controllers/conge/conge-controller";
import { authGuard } from "../../utils/jwt";

const CongeRouter = Router();

CongeRouter.put("/gereconge", CongeValidator.check_GereConge(), MiddlewareValidator.handleUserValidatorError, CongeClass.GereConge);
CongeRouter.post("/creeconge", authGuard, CongeClass.CreeConge);
CongeRouter.delete("/deleteconge/:id_conge", authGuard, CongeClass.DeleteConge);
/* ADMIN CARDS NUMBER FUNCTION */

CongeRouter.get("/getnbcongea", CongeClass.GetNbCongeA);
CongeRouter.get("/getnbconger", CongeClass.GetNbCongeR);
CongeRouter.get("/getnbcongew", CongeClass.GetNbCongeW);

/* USER CARDS NUMBER FUNCTION */
CongeRouter.post("/getnbcongeauser", authGuard, CongeClass.GetNbCongeAUser);
CongeRouter.post("/getnbcongeruser", authGuard, CongeClass.GetNbCongeRUser);
CongeRouter.post("/getnbcongewuser", authGuard, CongeClass.GetNbCongeWUser);
CongeRouter.post("/getnbcongersuser", authGuard, CongeClass.GetNbCongeRSUser);

export default CongeRouter;
