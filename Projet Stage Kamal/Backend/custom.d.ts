import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      // Add your custom properties here
      user?: any;
    }
  }
}
