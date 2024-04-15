"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_contoller_1 = __importDefault(require("../../controllers/auth/auth-contoller"));
const authValidator_1 = __importDefault(require("../../validators/authValidator"));
const middlewareValidator_1 = __importDefault(require("../../validators/middlewareValidator"));
const jwt_1 = require("../../utils/jwt");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post("/login", authValidator_1.default.check_auth_Login(), middlewareValidator_1.default.handleUserValidatorError, auth_contoller_1.default.auth_Login);
AuthRouter.post("/register", authValidator_1.default.ckeck_auth_register(), middlewareValidator_1.default.handleUserValidatorError, auth_contoller_1.default.auth_register);
AuthRouter.get("/", jwt_1.authGuard, auth_contoller_1.default.AuthTest);
exports.default = AuthRouter;
