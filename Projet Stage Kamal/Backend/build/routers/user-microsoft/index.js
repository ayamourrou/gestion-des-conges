"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_microsoft_1 = __importDefault(require("../../controllers/user-microsoft"));
const MsAuthenticated_1 = __importDefault(require("../../validators/MsAuthenticated"));
const express_1 = require("express");
const UserMsRouter = (0, express_1.Router)();
UserMsRouter.get("/id", MsAuthenticated_1.default.isAuthenticated, // check if user is authenticated
user_microsoft_1.default.GetID);
UserMsRouter.get("/profile", MsAuthenticated_1.default.isAuthenticated, // check if user is authenticated
user_microsoft_1.default.GetProfile);
exports.default = UserMsRouter;
