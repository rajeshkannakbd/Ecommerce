const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/Db");
const authRoutes = require("./Routes/Authroutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


connectDB();

app.use("/", authRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));