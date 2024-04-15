import { Router } from "express";
import UserClass from "../../controllers/user/user-contoller";
import UserValidator from "../../validators/userValidator";
import MiddlewareValidator from "../../validators/middlewareValidator";
import { authGuard } from "../../utils/jwt";

const UserRouter = Router();

UserRouter.post("/addUser", UserValidator.checkAddUser(), MiddlewareValidator.handleUserValidatorError, UserClass.AddUser);
UserRouter.put("/editUser", UserValidator.checkIdBody(), MiddlewareValidator.handleUserValidatorError, UserClass.EditUser);
UserRouter.delete("/deleteUser/:id_user", UserClass.DeleteUser);

UserRouter.get("/getnbusers", UserClass.GetNbUsers);

UserRouter.post("/findcin", UserValidator.checkCINBody(), MiddlewareValidator.handleUserValidatorError, UserClass.FindCIN);
UserRouter.post("/resetpassword", UserClass.ResetPassword);

UserRouter.get("/getuserinfo", authGuard, UserClass.GetInfoUser);

export default UserRouter;
