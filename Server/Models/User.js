const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String,
});

  const OrderSchema = new mongoose.Schema({
    name : String,
    mobileNumber : Number,
    email : String,
    address: String,
    payment: String,
    cart:Array,
    total : Number,
  })
 
const UserModel = mongoose.model("Users",UserSchema)
const OrderModel = mongoose.model("Orders",OrderSchema)


module.exports = { UserModel, OrderModel };