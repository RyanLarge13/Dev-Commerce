import express from "express";
import { renderLogin } from "../../controllers/loginController/loginEmail.js";

export const loginRouter = express.Router();

loginRouter.route("/login").get(renderLogin);
