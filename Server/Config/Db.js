const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://new_raejsh_02:efikSHMb1O7Vr6Ud@cluster0.y5hgyfr.mongodb.net/ShopCart?retryWrites=true&w=majority");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

module.exports = connectDB;
