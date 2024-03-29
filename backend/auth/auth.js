import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
 const authorizationHeader = req.headers["authorization"];
 const token = authorizationHeader && authorizationHeader.split(" ")[1];
 if (token == null)
  return res.status(401).json({ message: "Please login" });
 jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  if (err)
   return res
    .status(403)
    .json({ message: "You are not authorized, please login and try again" });
  req.user = user;
  next();
 });
};

export default auth;
