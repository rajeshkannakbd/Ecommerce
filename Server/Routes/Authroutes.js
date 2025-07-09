const express = require("express");
const router = express.Router();
const { register, login, order, product, newitem, deleteitem, singlePRoduct, getProductById, updateProduct, uploadProductWithImage, userDetails, orderDetails, createPayment, verifyPayment, deleteOrder, deleteuser, GetuserById, updateUser } = require("../Controllers/Authcontroller");
const upload = require("../Middleware/Multer");
const { getUserOrders, orderstatus } = require("../Controllers/UserorderController");

router.post("/register", register);
router.post("/login", login);
router.get("/Product",product)
router.get("/SingleProduct/:id", singlePRoduct); 
router.post("/newitem",newitem)
router.delete("/deleteitem/:id", deleteitem);
router.post("/order",order);
router.get("/Product/:id",getProductById);
router.put("/Product/:id",updateProduct)
router.post("/upload-product", upload.single("image"), uploadProductWithImage);
router.get("/users",userDetails)
router.delete("/deleteuser/:id",deleteuser);
router.get("/orderDetails",orderDetails)
router.delete("/deleteorder/:id",deleteOrder);
router.post("/create-payment", createPayment);
router.post("/verify-payment", verifyPayment);
router.get("/user/:id",GetuserById);
router.put("/user/edit/:id",updateUser)
router.get("/userOrders",getUserOrders)
router.put("/Order/:id",orderstatus)
module.exports = router;
