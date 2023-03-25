import express from "express";
import passport from "passport";
import { renderProfile } from "../../controllers/profileController/profileController.js";

export const profileRouter = express.Router();

profileRouter
  .route("/:username")
  .get(passport.authenticate("jwt", { session: false }), renderProfile);
