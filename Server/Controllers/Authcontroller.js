const { OrderModel, productModel, itemModel } = require("../Models/User");
const { UserModel } = require("../Models/User");
const bcrypt = require("bcrypt");
const razorpay = require("../Config/Razorpay");
const crypto = require("crypto");

/*__REGISTER ROUTE__*/

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !isNaN(name)) {
      return res.status(400).json({ message: "Username cannot be a number" });
    }

    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

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

/*__LOGIN ROUTE__*/

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // ✅ Explicitly select the password field
    const user = await UserModel.findOne({ email }).select("+password");

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
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Unexpected login error:", err);
    res.status(500).json({ status: "error", message: "Server error", err });
  }
};


/*__PRODUCT LISTING ROUtE__*/

exports.product = async (req, res) => {
  const product = await itemModel.find({});
  res.status(200).json({
    product,
  });
};

/*__SINGLE PRODUCT LISTING ROUE__*/

exports.singlePRoduct = async (req, res) => {
  try {
    const singleproduct = await itemModel.findById(req.params.id);
    if (!singleproduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "success", product: singleproduct });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Error fetching product" });
  }
};

/*__ADDING NEW ITEM ROUTE__*/

exports.newitem = async (req, res) => {
  const { title, desc, price, category, rating, count } = req.body;

  if (!title || !desc || !price || !category || !rating || !count) {
    return res.status(400).json({
      status: "error",
      message: "Give A Proper Details",
    });
  }

  const newitem = new itemModel({
    title,
    desc,
    price,
    category,
    rating,
    count,
  });

  try {
    const savedItem = await newitem.save();
    console.log("Unique ID:", savedItem._id);

    res.status(201).json({
      success: true,
      message: "new item api working",
      item: {
        title: savedItem.title,
        desc: savedItem.desc,
        price: savedItem.price,
        category: savedItem.category,
        rating: savedItem.rating,
        count: savedItem,
      },
    });
  } catch (err) {
    console.error("Save failed:", err);
    res.status(500).json({
      success: false,
      message: "Failed to save product",
    });
  }
};

/*__DELETE ITEM ROUTE ROUTE__*/

exports.deleteitem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await itemModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error during deletion" });
  }
};

/*__ORDER PALCING USER DEATIS ROUTE__*/

exports.order = async (req, res) => {
  
  const { name, email, mobileNumber, address, payment, cartItems, total , orderstatus } =
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
      orderstatus,
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

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await itemModel.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product", error });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const product = await itemModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

exports.uploadProductWithImage = async (req, res) => {
  try {
    const { title, desc, price, category, rating, count } = req.body;
    const imageUrl = req.file.path;
    // const image = req.file?.filename;
    // console.log("req.file", req.file);

    if (!title || !desc || !price || !category || !imageUrl) {
      return res
        .status(400)
        .json({ message: "All fields including image are required" });
    }
    const newItem = new itemModel({
      title,
      desc,
      price,
      category,
      image: imageUrl,
      rating,
      count,
    });

    const savedItem = await newItem.save();
    res.status(201).json({ message: "Product created", item: savedItem });
  } catch (err) {
    console.error("Upload failed:", err);
    res.status(500).json({ message: "Server error while uploading product" });
  }
};

exports.userDetails = async (req, res) => {
  const users = await UserModel.find({});
  res.json({
    message: "sucess",
    users,
  });
};

exports.orderDetails = async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.json({ message: "success", orders });
  } catch (err) {
    console.error("Error fetching order details:", err);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
};

//payment integration

// const Razorpay = require("razorpay");
// const crypto = require("crypto");

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

exports.createPayment = async (req, res) => {
  const { total } = req.body;

  if (!total || isNaN(total)) {
    console.log("==> [createPayment] Invalid total:", total);
    return res
      .status(400)
      .json({ success: false, message: "Invalid total amount" });
  }

  const options = {
    amount: Math.round(total * 100), // ₹249 becomes 24900 paise
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("==> Razorpay order created:", order);
    res.status(200).json({
      success: true,
      order,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("==> Razorpay Order Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Payment initiation failed" });
  }
};

const sendOrderEmail = require("../utils/Mailer");
const { stat } = require("fs");

exports.verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    orderDetails,
  } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign.toString())
    .digest("hex");

  if (!orderDetails) {
    return res
      .status(400)
      .json({ success: false, message: "Missing order details" });
  }

  if (expectedSignature === razorpay_signature) {
   
    const { name, email, mobileNumber, address, payment, cartItems, total , orderstatus } = orderDetails;
      

    try {
      const newOrder = new OrderModel({
        name,
        email,
        mobileNumber,
        address,
        payment,
        cart: cartItems,
        total,
        orderstatus,
      });
      
      await newOrder.save();

      // ✅ Send email without route
      const emailBody = `
        <h2>Hi ${name},</h2>
        <p>🎉 Your order has been placed successfully!</p>
        <p><strong>Order ID:</strong> ${newOrder._id}</p>
        <p><strong>Total:</strong> ₹${total}</p>
        <p>📦 We’ll notify you when it ships.</p>
        <br>
        <p>Thanks for shopping with us!</p>
      `;

      await sendOrderEmail(email, "Order Confirmation", emailBody);
      
      return res.status(200).json({
        success: true,
        message: "Payment verified, order stored, and email sent",
      });
    } catch (err) {
      console.error("Error Saving Order or Sending Email:", err);
      return res.status(500).json({
        success: false,
        message: "Order saved but email sending failed",
      });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Payment verification failed" });
  }
};

exports.deleteOrder = async(req,res)=>{
     const { id } = req.params;
  try {
    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error during deletion" });
  }
}

exports.deleteuser = async(req,res)=>{
     const { id } = req.params;
  try {
    const deletedOrder = await UserModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error during deletion" });
  }
}

exports.GetuserById = async(req,res)=>{
     const { id } = req.params;
      console.log("Fetching user by ID:", id); 
  try {
    const User = await UserModel.findById(id);
    if (!User) return res.status(404).json({ message: "User not found" });
    res.json({ User });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving User", error });
  }
}

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const User = await UserModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!User) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully", User });
  } catch (error) {
    res.status(500).json({ message: "Error updating User", error });
  }
};


/*__PRODUCT LISTING ROUTE USING FAKESTOREAPI__*/

// exports.newproduct = async (req, res) => {
//   const { title, desc, price, category, rating } = req.body;

//   if (!title || !desc || !price || !rating || !category) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   try {
//     const newproduct = new productModel({
//       title,
//       desc,
//       price,
//       category,
//       rating,
//     });

//     await newproduct.save();
//     return res.status(201).json({ message: "Order placed successfully!" });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     return res
//       .status(500)
//       .json({ message: "Server error while placing order" });
//   }
// };

// exports.order = async (req, res) => {
//   try {
//     const order = await OrderModel.create(req.body);
//     res.status(201).json({ success: true, order });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };
