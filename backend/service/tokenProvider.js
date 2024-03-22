const jwt = require("jsonwebtoken");
const env = require("dotenv");

const createToken = (userData) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const payload = {
    id: userData._id,
    name: userData.name,
    email: userData.email,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "5h" });

  return token;
};

module.exports = createToken;
