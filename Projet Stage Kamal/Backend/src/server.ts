import { config } from "dotenv";
config();
import express from "express";
import DataBase from "./db/DataBase";
import mainRouter from "./routers";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import session from "express-session";

// loading env vars

const API_PORT = process.env.API_PORT || 3800;

// End

const app = express();

DataBase.sync().then(() => {
  console.log("Connect to db");
});

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
// Configure the morgan module to log all requests.
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET || "Lamak2023",
    resave: false,
    saveUninitialized: true,
    // Configure the store if needed
    // store: yourSessionStore,
  })
);
// END MIDDLEWARES

// ROUTRES
app.use("/api", mainRouter);
// END ROUTES

const server = http.createServer(app);

server.listen(API_PORT, () => {
  console.log("Server runing on Port " + API_PORT);
});
