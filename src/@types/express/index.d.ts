import * as express from "express";
import { IUserAllData } from "../../interfaces/users";
declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}
