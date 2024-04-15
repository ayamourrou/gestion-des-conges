import { Router } from "express";
import UserRouter from "./user/user-routre";
import AuthRouter from "./auth/auth-routre";
import CongeRouter from "./conge/conge-routre";
import TablesRouter from "./table/table-routre";
import MsRouter from "./auth-microsoft";
import UserMsRouter from "./user-microsoft";

const mainRouter = Router();

mainRouter.use("/user", UserRouter);
mainRouter.use("/auth", AuthRouter);
mainRouter.use("/conge", CongeRouter);
mainRouter.use("/table", TablesRouter);
mainRouter.use("/auth-microsoft", MsRouter);
mainRouter.use("/user-microsoft", UserMsRouter);

export default mainRouter;
