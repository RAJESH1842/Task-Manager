const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECTED TO DB");
  } catch (err) {
    console.log("DB CONNECTION ERROR:", err.message);
  }
};

module.exports = connectDB;