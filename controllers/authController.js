const User = require("../models/auth.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res
        .status(400)
        .json({ message: "Name dan password harus diisi!" });
    }

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ message: "user not found!" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    const token = jwt.sign({ user: user.name }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 3600000,
      sameSite: "strict",
    });

    return res
      .header("Authorization", `Bearer ${token}`)
      .status(200)
      .json({ message: "Login Success!" });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(400)
      .json({ message: "Login error", error: error.message });
  }
};
