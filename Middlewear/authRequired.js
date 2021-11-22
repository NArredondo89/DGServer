// jwt middle ware for verification
const jwt = require("jsonwebtoken");
// require('dotenv').config()

module.exports = async (req, res, next) => {
  try {
    // grab token
    const bearerHeader = req.headers.authorization;

    // if no token
    if (typeof bearerHeader === "undefined") {
      return res.sendStatus(403);
    }

    // if there is a token
    const token = bearerHeader.split(" ")[1];
    const payload = await jwt.verify(token, "supersecretwaffles");
    req.userId = payload._id;

    next();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error" });
  }
};
