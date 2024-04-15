"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const table_contoller_1 = __importDefault(require("../../controllers/table/table-contoller"));
const jwt_1 = require("../../utils/jwt");
const TablesRouter = (0, express_1.Router)();
TablesRouter.get("/gettableuser", table_contoller_1.default.GetTableUser);
TablesRouter.get("/gettablecongeresponse", table_contoller_1.default.GetTableCongeRESPONSE);
TablesRouter.get("/gettablecongeaccept", table_contoller_1.default.GetTableCongeAccept);
TablesRouter.get("/gettablecongerefuse", table_contoller_1.default.GetTableCongeRefuse);
TablesRouter.get("/gettablecongewaiting", table_contoller_1.default.GetTableCongeWaiting);
TablesRouter.get("/gettablecongeresponseuser", jwt_1.authGuard, table_contoller_1.default.GetTableCongeResponseUser);
TablesRouter.get("/gettablecongeacceptuser", jwt_1.authGuard, table_contoller_1.default.GetTableCongeAcceptUser);
TablesRouter.get("/gettablecongerefuseuser", jwt_1.authGuard, table_contoller_1.default.GetTableCongeRefuseUser);
TablesRouter.get("/gettablecongewaitinguser", jwt_1.authGuard, table_contoller_1.default.GetTableCongeWaitingUser);
exports.default = TablesRouter;
