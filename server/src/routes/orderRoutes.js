import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to save order" });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
});

// UPDATE item quantity (PUT)
router.put("/update/:id", async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE item from cart
router.delete("/remove/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
