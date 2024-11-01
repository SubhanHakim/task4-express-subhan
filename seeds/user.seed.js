const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/auth.models.js");
const db = require("../config/database.js");

async function seedUser() {
  try {
    await mongoose.connect(db.url);

    // Hapus user yang ada terlebih dahulu
    await userModel.deleteMany({ name: "subhan" });

    // Buat credentials
    const password = "subhan321";
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
    await userModel.create({
      name: "subhan",
      password: hashedPassword
    });

    console.log("User created successfully");

  } catch (error) {
    console.log("Error seeding data:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Database connection closed");
  }
}

seedUser().then(() => {
  console.log("Seed operation completed");
  process.exit(0);
}).catch((err) => {
  console.log("Error:", err);
  process.exit(1);
});
