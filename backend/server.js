import { connectDB } from "./config/db.js";
import express from "express";
import dotenv from "dotenv";

//======Importing routers======
import { indexRouter } from "./routes/index.js";
import { loginRouter } from "./routes/loginSignupRouter/loginRouter.js";

dotenv.config();
connectDB();

const PORT = process.env.ENV === "dev" ? 8080 : null;
const app = express();

//Middleware
app.set("views", "../frontend");
app.set("view engine", "ejs");
app.use(express.static("../frontend"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/login", loginRouter);

app.listen(PORT, "0.0.0.0", () =>
 console.log(`Your app is listening on port ${PORT}`)
);
