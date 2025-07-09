const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return isNaN(v); // Returns false if v is a number
      },
      message: "Username cannot be a number",
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});


const itemSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
  category: String,
  rating: Number,
  count: Number,
  stock: String,
  image: String,
});

const OrderSchema = new mongoose.Schema({
  name: String,
  mobileNumber: Number,
  email: String,
  address: String,
  payment: String,
  cartItems: Array,
  total: Number,
 orderstatus: {
  type: String,
  enum: ["ordered", "pending", "shipped", "delivered"],
  default: "pending",
}
});

const UserModel = mongoose.model("Users", UserSchema);
const OrderModel = mongoose.model("Orders", OrderSchema);
// const productModel = mongoose.model("newProduct", productSchema);
const itemModel = mongoose.model("items", itemSchema);
module.exports = { UserModel, OrderModel, itemModel };

// const productSchema = new mongoose.Schema({
//   title: String,
//   desc: String,
//   price: Number,
//   category: String,
//   rating: Number,
// });
