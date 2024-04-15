"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_microsoft_1 = __importDefault(require("../../controllers/auth-microsoft"));
const MsRouter = (0, express_1.Router)();
MsRouter.get("/signin", auth_microsoft_1.default.Login);
MsRouter.get("/acquireToken", auth_microsoft_1.default.AcquireToken);
MsRouter.post("/redirect", auth_microsoft_1.default.RedirectHandle);
MsRouter.get("/signout", auth_microsoft_1.default.Logout);
exports.default = MsRouter;
