const User = require("../models/userCredentials");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const RegisterUser = async (req, resp) => {
  const { userName, password, email, phoneNumber } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      userName,
      password: hashedPassword,
      email,
      phoneNumber,
    });
    resp.status(201).json(user);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
};

const LoginUser = async (req, resp) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return resp.status(400).json({ error: "User credentials Invalid " });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return resp
        .status(400)
        .json({ error: "User passowrd credentials Invalid" });
    }

    const token = jwt.sign(
      { id: user.id, userName: user.userName, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    resp
      .status(200)
      .json({ message: "User logged in sucessfullly", token: token });
  } catch (error) {
    console.log(error);
    resp.status(400).json({ error: error.message });
  }
};

const logout = async (req, resp) => {
  resp.status(200).json({ message: "User logged out" });
};

module.exports = {
  RegisterUser,
  LoginUser,
  logout,
};
