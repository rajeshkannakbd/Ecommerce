const { OrderModel, productModel, itemModel } = require("../Models/User");
const { UserModel } = require("../Models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  console.log("Received body:", req.body);
  try {
    const { name, email, password } = req.body;

    const extinctUser = await UserModel.findOne({ email }).select("+password");
    if (extinctUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashedpassword,
      role: "user",
    });

    res.status(201).json({
      success: true,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login attempt with:", email);

    const user = await UserModel.findOne({ email });

    if (!user) {
      console.log("No user found with email:", email);
      return res
        .status(404)
        .json({ status: "error", message: "No user exists" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password for user:", email);
      return res
        .status(401)
        .json({ status: "error", message: "Invalid password" });
    }

    res.status(200).json({
      status: "success",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Unexpected login error:", err);
    res.status(500).json({ status: "error", message: "Server error", err });
  }
};

// exports.order = async (req, res) => {
//   try {
//     const order = await OrderModel.create(req.body);
//     res.status(201).json({ success: true, order });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

exports.order = async (req, res) => {
  const { name, email, mobileNumber, address, payment, cartItems, total } =
    req.body;

  if (
    !name ||
    !email ||
    !mobileNumber ||
    !address ||
    !payment ||
    !cartItems ||
    !total
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newOrder = new OrderModel({
      name,
      email,
      mobileNumber,
      address,
      payment,
      cart: cartItems,
      total,
    });

    await newOrder.save();
    return res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error placing order:", error);
    return res
      .status(500)
      .json({ message: "Server error while placing order" });
  }
};
exports.newproduct = async (req, res) => {
  const { title, desc, price, category, rating } = req.body;

  if (!title || !desc || !price || !rating || !category) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newproduct = new productModel({
      title,
      desc,
      price,
      category,
      rating,
    });

    await newproduct.save();
    return res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error placing order:", error);
    return res
      .status(500)
      .json({ message: "Server error while placing order" });
  }
};

exports.product = async (req, res) => {
  const product = await itemModel.find({});
  res.status(200).json({
    product,
  });
};

exports.newitem = (req, res) => {
  const { title, desc, price, category, rating } = req.body;
  const newitem = new itemModel({
    title, desc, price, category, rating
  })
  newitem.save()
  console.log("Unique ID:", newitem._id);
  res.status(201).json({
    success: "true",
    message: "new item api working",
    item:{
        title: newitem.title,
        desc: newitem.desc,
        price: newitem.price,
        category: newitem.category,
        rating: newitem.rating,
    },
  });
};


exports.deleteitem = async (req,res)=>{
   const { id } = req.params;
   
  try {
    const deletedProduct = await itemModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: 'Server error during deletion' });
  }
}