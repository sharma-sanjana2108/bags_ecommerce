const jwt = require("jsonwebtoken");
const userData = require("../models/authModel");

const verifyToken = async (req, res, next) => {
  const userToken = req.headers.authoraization;
  if (userToken && userToken.startsWith("Bearer")) {
    const token = userToken.split("Bearer")[1];
    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await userData.findById(id).select("-password");
      next();
    } catch (error) {
      return res
        .status(401)
        .send({ status: "failed", message: "session is expired" });
    }
  } else {
    res.send({ message: "User Unauthorized!!" });
  }
};

module.exports = verifyToken;
