import express from "express";
import { renderIndex } from "../../controllers/index.js";

export const indexRouter = express.Router();

indexRouter.route("/").get(renderIndex);
