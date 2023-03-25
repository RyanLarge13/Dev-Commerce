import passport from "passport";
import localStrategy from "passport-local";
import passportJwt from "passport-jwt";
import bcrypt from "bcryptjs";
import { Users } from "../models/userModels/userModel.js";
const JWTStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const validatePassword = async (pass, userPass) => {
  let bool;
  await bcrypt
    .compare(pass, userPass)
    .then((isMatch) => {
      if (isMatch) bool = true;
      else bool = false;
    })
    .catch((err) => {
      bool = false;
      return console.log(err);
    });
  return bool;
};

//This is a piece of middleware for authenticating users when logged in and traveling to different end points. It uses a jwt strategy to check for the token in http headers.
passport.use(
  new localStrategy((username, password, callback) => {
    Users.findOne({ Email: username }, (err, user) => {
      if (err) {
        console.log(err);
        return callback(err);
      }
      if (!user) {
        console.log("Incorrect username.");
        return callback(null, false, {
          message: "Incorrect username or password.",
        });
      }
      if (!validatePassword(password, user.Password)) {
        return console.log("incorrect password");
      }
      return callback(null, user);
    });
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret",
    },
    async (jwtPayload, callback) => {
      return Users.findById(jwtPayload._id)
        .then((user) => callback(null, user))
        .catch((err) => callback(err));
    }
  )
);
