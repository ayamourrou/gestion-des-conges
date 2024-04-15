/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import UserMSController from "../../controllers/user-microsoft";
import isAuthenticatedClass from "../../validators/MsAuthenticated";

import { Router } from "express";

const UserMsRouter = Router();

UserMsRouter.get(
  "/id",
  isAuthenticatedClass.isAuthenticated, // check if user is authenticated
  UserMSController.GetID
);

UserMsRouter.get(
  "/profile",
  isAuthenticatedClass.isAuthenticated, // check if user is authenticated
  UserMSController.GetProfile
);

export default UserMsRouter;
