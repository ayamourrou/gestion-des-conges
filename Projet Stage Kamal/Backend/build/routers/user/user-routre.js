"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_contoller_1 = __importDefault(require("../../controllers/user/user-contoller"));
const userValidator_1 = __importDefault(require("../../validators/userValidator"));
const middlewareValidator_1 = __importDefault(require("../../validators/middlewareValidator"));
const jwt_1 = require("../../utils/jwt");
const UserRouter = (0, express_1.Router)();
UserRouter.post("/addUser", userValidator_1.default.checkAddUser(), middlewareValidator_1.default.handleUserValidatorError, user_contoller_1.default.AddUser);
UserRouter.put("/editUser", userValidator_1.default.checkIdBody(), middlewareValidator_1.default.handleUserValidatorError, user_contoller_1.default.EditUser);
UserRouter.delete("/deleteUser/:id_user", user_contoller_1.default.DeleteUser);
UserRouter.get("/getnbusers", user_contoller_1.default.GetNbUsers);
UserRouter.post("/findcin", userValidator_1.default.checkCINBody(), middlewareValidator_1.default.handleUserValidatorError, user_contoller_1.default.FindCIN);
UserRouter.post("/resetpassword", user_contoller_1.default.ResetPassword);
UserRouter.get("/getuserinfo", jwt_1.authGuard, user_contoller_1.default.GetInfoUser);
exports.default = UserRouter;
