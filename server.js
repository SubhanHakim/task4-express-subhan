const db = require("./config/database");
const app = require("./app");
const mongoose = require("mongoose");
const http = require("http");

// connect database
mongoose
  .connect(db.url)
  .then(() => {
    console.log("Database berhasil terhubung");
  })
  .catch((err) => {
    console.log("Gagal terhubung ke database:", err.message);
  });

const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
