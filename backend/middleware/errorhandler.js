const errorHandler = (error, req, res, next) => {

  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((val) => val.message);
    return res.status(400).send({ message: messages.join(",") });
  } else if (error.message) {
    return res.status(400).send({ message: error.message });
  } else if (error.name === "tokenExpiredError") {
    return res
      .status(401)
      .send({ message: "your session has expired.login again  " });
  }

  return res.status(500).send({ message: "Internal Server Error" });
};

module.exports = errorHandler;
