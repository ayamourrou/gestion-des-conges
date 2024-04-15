import { Router } from "express";
import Authentication from "../../controllers/auth/auth-contoller";
import AuthValidator from "../../validators/authValidator";
import MiddlewareValidator from "../../validators/middlewareValidator";
import { authGuard } from "../../utils/jwt";

const AuthRouter = Router();

AuthRouter.post("/login", AuthValidator.check_auth_Login(), MiddlewareValidator.handleUserValidatorError, Authentication.auth_Login);
AuthRouter.post("/register", AuthValidator.ckeck_auth_register(), MiddlewareValidator.handleUserValidatorError, Authentication.auth_register);

AuthRouter.get("/", authGuard, Authentication.AuthTest);

export default AuthRouter;
