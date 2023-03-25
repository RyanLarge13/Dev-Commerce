import express from "express";
import { loginWithEmailPass } from "../../auth/auth.js";
import { renderLogin } from "../../controllers/loginController/loginEmail.js";

export const loginRouter = express.Router();

loginRouter.route("/login").get(renderLogin).post(loginWithEmailPass);
