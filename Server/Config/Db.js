const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rajeshkannakbd:x1GyRTVCOdJAk1jA@cluster0.ykakrhi.mongodb.net/");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

module.exports = connectDB;
