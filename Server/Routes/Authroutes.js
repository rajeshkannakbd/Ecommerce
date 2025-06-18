const express = require("express");
const router = express.Router();
const { register, login, order, newproduct, product, newitem } = require("../Controllers/Authcontroller");

router.post("/register", register);
router.post("/login", login);
router.post("/order",order)
router.post("/newProduct",newproduct)
router.get("/Product",product)
router.post("/newitem",newitem)

module.exports = router;
