const mongoose = require("mongoose");
const User = require("../models/auth.models.js");

mongoose
  .connect("mongodb://localhost:27017/book-task4")
  .then(async () => {
    try {
      console.log("Connected to MongoDB");
      await User.deleteMany();

      const user = new User({
        name: "subhan",
        password: "subhan123",
      });

      await user.save();
      console.log("User created successfully");
    } catch (error) {
      console.error("Error seeding data:", error);
    } finally {
      await mongoose.disconnect();
      console.log("Database connection closed");
    }
  })
  .catch((err) => {
    console.log("failed to connect database", err);
  });
