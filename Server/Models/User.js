const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const itemSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  category: String,
  rating: Array,
  stock: String,
  image: String,
});

// const productSchema = new mongoose.Schema({
//   title: String,
//   desc: String,
//   price: Number,
//   category: String,
//   rating: Number,
// });

const OrderSchema = new mongoose.Schema({
  name: String,
  mobileNumber: Number,
  email: String,
  address: String,
  payment: String,
  cart: Array,
  total: Number,
});

const UserModel = mongoose.model("Users", UserSchema);
const OrderModel = mongoose.model("Orders", OrderSchema);
// const productModel = mongoose.model("newProduct", productSchema);
const itemModel = mongoose.model("items", itemSchema);
module.exports = { UserModel, OrderModel, itemModel };
