const { OrderModel } = require("../Models/User");

// controllers/orderController.js
exports.getUserOrders = async (req, res) => {
  const { email } = req.query;
  try {
    const orders = await OrderModel.find({ email });
    res.json({ message: "success", orders });
  } catch (err) {
    console.error("Error fetching user orders:", err);
    res.status(500).json({ message: "Server error while fetching user orders" });
  }
};
exports.orderstatus = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const order = await OrderModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Order status updated successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
};

