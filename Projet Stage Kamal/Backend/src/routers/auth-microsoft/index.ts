/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Router } from "express";
import MicrosoftAuthController from "../../controllers/auth-microsoft";
import authProvider from "../../config/auth/AuthProvider";
import { REDIRECT_URI } from "../../config/authConfig";

const MsRouter = Router();

MsRouter.get("/signin", MicrosoftAuthController.Login);

MsRouter.get("/acquireToken", MicrosoftAuthController.AcquireToken);

MsRouter.post("/redirect", MicrosoftAuthController.RedirectHandle);

MsRouter.get("/signout", MicrosoftAuthController.Logout);

export default MsRouter;
