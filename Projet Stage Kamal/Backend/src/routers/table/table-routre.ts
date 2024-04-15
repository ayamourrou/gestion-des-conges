import { Router } from "express";
import TablesClass from "../../controllers/table/table-contoller";
import { authGuard } from "../../utils/jwt";

const TablesRouter = Router();

TablesRouter.get("/gettableuser", TablesClass.GetTableUser);
TablesRouter.get("/gettablecongeresponse", TablesClass.GetTableCongeRESPONSE);
TablesRouter.get("/gettablecongeaccept", TablesClass.GetTableCongeAccept);
TablesRouter.get("/gettablecongerefuse", TablesClass.GetTableCongeRefuse);
TablesRouter.get("/gettablecongewaiting", TablesClass.GetTableCongeWaiting);

TablesRouter.get("/gettablecongeresponseuser", authGuard, TablesClass.GetTableCongeResponseUser);
TablesRouter.get("/gettablecongeacceptuser", authGuard, TablesClass.GetTableCongeAcceptUser);
TablesRouter.get("/gettablecongerefuseuser", authGuard, TablesClass.GetTableCongeRefuseUser);
TablesRouter.get("/gettablecongewaitinguser", authGuard, TablesClass.GetTableCongeWaitingUser);

export default TablesRouter;
