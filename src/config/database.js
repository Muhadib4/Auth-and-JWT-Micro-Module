const mongoose = require("mongoose");
require("dotenv").config();

async function connectDatabase() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI belum diatur di file .env");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB berhasil terhubung");
}

module.exports = connectDatabase;
