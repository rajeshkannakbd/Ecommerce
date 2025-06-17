// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const UserModel = require("./User");
// const bcrypt = require("bcrypt");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect("mongodb://localhost:27017/userDB", {})
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection failed:", err);
//   });

// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const extinctUser = await UserModel.findOne({ email });
//     if (extinctUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }
//     const hashedpassword = await bcrypt.hash(password, 10);
//     const user = await UserModel.create({
//       name,
//       email,
//       password: hashedpassword,
//     });
//     res
//       .status(201)
//       .json({ success: true, user: { name: user.name, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ status: "error", message: "No user exists" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ status: "error", message: "Invalid password" });
//     }

//     res.status(200).json({
//       status: "success",
//       user: {
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ status: "error", message: "Server error" });
//   }
// });


// app.listen(3000, () => console.log("server is running on port 3000"));
const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/Db");
const authRoutes = require("./Routes/Authroutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/", authRoutes);

app.listen(5000, () => console.log("Server is running on port 5000"));
