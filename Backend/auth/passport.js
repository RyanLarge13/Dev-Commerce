import passport from "passport";
import localStrategy from "passport-local";
import passportJwt from "passport-jwt";
import { Users } from "../models/userModels/userModel.js";
const JWTStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

//This is a piece of middleware for authenticating users when logged in and traveling to different end points. It uses a jwt strategy to check for the token in http headers.
passport.use(
  new localStrategy((username, password, callback) => {
    Users.findOne({ Username: username }, (err, user) => {
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
      if (!user.validatePassword(password)) {
        return console.log("incorrect password");
      }
      console.log("Finished.");
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
