import { connectDB } from "./config/db.js";
import express from "express";
import dotenv from "dotenv";

//======Importing routers======
import { indexRouter } from "./routes/index.js";
import { loginRouter } from "./routes/loginSignupRouter/loginRouter.js";
import { profileRouter } from "./routes/userRoutes/profile.js";

dotenv.config();
connectDB();

const app = express();

//Middleware
app.set("views", "../frontend");
app.set("view engine", "ejs");
app.use(express.static("../frontend"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter, loginRouter);
app.use("/profile", profileRouter);

app.listen(8080, () =>
  console.log("Your app is listening on port 8080 : http://localhost:8080")
);
