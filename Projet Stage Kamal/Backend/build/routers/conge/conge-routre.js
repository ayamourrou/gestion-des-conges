"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const congeValidator_1 = __importDefault(require("../../validators/congeValidator"));
const middlewareValidator_1 = __importDefault(require("../../validators/middlewareValidator"));
const conge_controller_1 = __importDefault(require("../../controllers/conge/conge-controller"));
const jwt_1 = require("../../utils/jwt");
const CongeRouter = (0, express_1.Router)();
CongeRouter.put("/gereconge", congeValidator_1.default.check_GereConge(), middlewareValidator_1.default.handleUserValidatorError, conge_controller_1.default.GereConge);
CongeRouter.post("/creeconge", jwt_1.authGuard, conge_controller_1.default.CreeConge);
CongeRouter.delete("/deleteconge/:id_conge", jwt_1.authGuard, conge_controller_1.default.DeleteConge);
/* ADMIN CARDS NUMBER FUNCTION */
CongeRouter.get("/getnbcongea", conge_controller_1.default.GetNbCongeA);
CongeRouter.get("/getnbconger", conge_controller_1.default.GetNbCongeR);
CongeRouter.get("/getnbcongew", conge_controller_1.default.GetNbCongeW);
/* USER CARDS NUMBER FUNCTION */
CongeRouter.post("/getnbcongeauser", jwt_1.authGuard, conge_controller_1.default.GetNbCongeAUser);
CongeRouter.post("/getnbcongeruser", jwt_1.authGuard, conge_controller_1.default.GetNbCongeRUser);
CongeRouter.post("/getnbcongewuser", jwt_1.authGuard, conge_controller_1.default.GetNbCongeWUser);
CongeRouter.post("/getnbcongersuser", jwt_1.authGuard, conge_controller_1.default.GetNbCongeRSUser);
exports.default = CongeRouter;
