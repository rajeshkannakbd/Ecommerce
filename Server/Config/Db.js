const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rajeshkannakbd_db_user:yMoYrIuRFBKmjvhj@ecomm.qu5gkb2.mongodb.net/?appName=Ecomm");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

module.exports = connectDB;
