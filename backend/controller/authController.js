const userData = require("../models/authModel");
const bcrypt = require("bcrypt");
const createToken = require("../service/tokenProvider");


//*********Register user****//
const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const userEmail = await userData.findOne({ email: email });
  if (userEmail) {
    return res.status(400).send({ message: "User already registered" });
  }

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).send({ message: "Please fill all the details!!" });
  }

  if (password !== confirmPassword) {
    return res.status(400).send({ message: "Passwords do not match" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const user = new userData({
    name: name,
    email: email,
    password: hashPassword,
  });

  await user.save();
  const token = createToken(user);
  return res
    .status(200)
    .send({ message: "User registered successfully!!", token: token });
};


//*********login user****//
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await userData.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = createToken(user);
        // set Bearer//
        const Token = `Bearer${token}`;
        return res
          .status(200)
          .send({ token: Token, message: "User Login Successfully!!" });
      } else {
        return res.status(400).send({ message: "Invalid password" });
      }
    } else {
      return res.status(400).send({ message: "Email not registered" });
    }
  } else {
    return res.status(400).send({ message: "Please fill all details" });
  }
};


//****Change Password****//

const changePassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  if (password && confirmPassword) {
    if (password !== confirmPassword) {
      return res.send({ message: "Please enter valid password!!" });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const savePassword = await userData.findByIdAndUpdate(req.user._id, {
        $set: { password: hashPassword },
      });
      return res
        .status(200)
        .send({ message: "Password Updated successfully!!" });
    }
  } else {
    return res.status(400).send({ message: "Please fill all the details!!" });
  }
};


//dashboard
const dashboard = (req, res) => {
  res.json({ message: "response send successfully", user: req.user });
};

module.exports = {
  registerUser,
  loginUser,
  changePassword,
  dashboard,
};
