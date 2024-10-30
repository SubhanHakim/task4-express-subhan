const User = require("../models/auth.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).send({ message: "user not found!" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Passowrd!" });
    }

    const token = jwt.sign({ user: user.name }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .header("Authorization", `Bearer ${token}`)
      .status(200)
      .send({ message: "Login Success!" });
  } catch (error) {
    return res.status(400).send(error);
  }
};
