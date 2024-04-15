"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const DataBase_1 = __importDefault(require("./db/DataBase"));
const routers_1 = __importDefault(require("./routers"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
// loading env vars
const API_PORT = process.env.API_PORT || 3800;
// End
const app = (0, express_1.default)();
DataBase_1.default.sync().then(() => {
    console.log("Connect to db");
});
// MIDDLEWARES
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Configure the morgan module to log all requests.
app.use((0, morgan_1.default)("dev"));
app.use((0, express_session_1.default)({
    secret: process.env.EXPRESS_SESSION_SECRET || "Lamak2023",
    resave: false,
    saveUninitialized: true,
    // Configure the store if needed
    // store: yourSessionStore,
}));
// END MIDDLEWARES
// ROUTRES
app.use("/api", routers_1.default);
// END ROUTES
const server = http_1.default.createServer(app);
server.listen(API_PORT, () => {
    console.log("Server runing on Port " + API_PORT);
});
