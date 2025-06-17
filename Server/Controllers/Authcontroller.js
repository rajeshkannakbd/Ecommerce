const {OrderModel} = require("../Models/User");
const {UserModel}  = require("../Models/User");
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
      return res.status(404).json({ status: "error", message: "No user exists" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password for user:", email);
      return res.status(401).json({ status: "error", message: "Invalid password" });
    }

    res.status(200).json({
      status: "success",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Unexpected login error:", err);
    res.status(500).json({ status: "error", message: "Server error" ,err});
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
  const { name, email, mobileNumber, address, payment, cartItems, total } = req.body;

  console.log("Received order:", req.body); // good for debugging

  if (!name || !email || !mobileNumber || !address || !payment || !cartItems || !total) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newOrder = new OrderModel({
      name,
      email,
      mobileNumber,
      address,
      payment,
      cart: cartItems, // Save cart items here
      total
    });

    await newOrder.save();
    return res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({ message: "Server error while placing order" });
  }
};
