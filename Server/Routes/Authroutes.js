const express = require("express");
const router = express.Router();
const { register, login, order, product, newitem, deleteitem, singlePRoduct, getProductById, updateProduct, uploadProductWithImage, userDetails, orderDetails } = require("../Controllers/Authcontroller");
const upload = require("../Middleware/Multer");

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
router.get("/orderDetails",orderDetails)


module.exports = router;
