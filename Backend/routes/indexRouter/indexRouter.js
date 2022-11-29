import express from "express";
import { renderBlogs } from "../../controllers/index.js";

export const indexRouter = express.Router();

indexRouter.route("/").get(renderBlogs);
