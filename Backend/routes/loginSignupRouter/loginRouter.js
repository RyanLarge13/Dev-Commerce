import  express from "express";
import { loginWithEmailPass } from "../../auth/auth.js";

export const loginRouter = express.Router();

loginRouter.route("/login").post(loginWithEmailPass);
