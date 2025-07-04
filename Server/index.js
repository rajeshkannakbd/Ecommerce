const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/Db");
const authRoutes = require("./Routes/Authroutes");
const dotenv = require("dotenv");
const path = require("path")
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


connectDB();

app.use("/", authRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));