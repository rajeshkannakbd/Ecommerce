const express = require("express");
const router = express.Router();
const { register, login, order } = require("../Controllers/Authcontroller");

router.post("/register", register);
router.post("/login", login);
router.post("/order",order)

module.exports = router;
