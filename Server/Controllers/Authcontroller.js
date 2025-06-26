const { OrderModel, productModel, itemModel } = require("../Models/User");
const { UserModel } = require("../Models/User");
const bcrypt = require("bcrypt");

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
    const user = await UserModel.findOne({ email }).select("+password");

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
  const { title, desc, price, category, rating , count } = req.body;

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
    count
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
        count: savedItem
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
    const product = await itemModel.findByIdAndUpdate(id, updatedData, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

  exports.uploadProductWithImage = async (req, res) => {
    try {
      const { title, desc, price, category ,rating,count } = req.body;
      const image = req.file?.filename;
      console.log("req.file", req.file);


      if (!title || !desc || !price || !category || !image) {
        return res.status(400).json({ message: "All fields including image are required" });
      }

      const newItem = new itemModel({
        title,
        desc,
        price,
        category,
        image: image,
        rating,
        count
      });

      const savedItem = await newItem.save();
      res.status(201).json({ message: "Product created", item: savedItem });
    } catch (err) {
      console.error("Upload failed:", err);
      res.status(500).json({ message: "Server error while uploading product" });
    }
  };


  exports.userDetails = async (req,res)=>{
    const users = await UserModel.find({})
      res.json({
        message : "sucess",
        users
      })
  }

  exports.orderDetails = async (req,res)=>{
    const orders = await OrderModel.find({})
      res.json({
        message : "sucess",
        orders
      })
  }





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
