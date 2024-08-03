const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/test";

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected")
  } catch (error) {
    console.log("DB connection error:", error);
  }
};

module.exports = connectDB;
