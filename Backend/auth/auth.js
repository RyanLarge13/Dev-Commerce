import jwt from "jsonwebtoken";
import passport from "passport";
import "./passport.js";
const jwtSecret = "your_jwt_secret";

//Creating a separate function for handling the signing of a jwt to the user.
let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username,
    expiresIn: "7d",
    algorithm: "HS256",
  });
};

//This functionality handles the logging in of users, authenticates them with passport and handles the response to send a jwt to the http header
export const loginWithEmailPass = (req, res) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      console.log(err, user, info);
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) res.send(err);
      let token = generateJWTToken(user.toJSON());
      return res.json({ user: user.Username, token });
    });
  })(req, res);
};
