import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userPhone: { type: String, required: true },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: "Success" },
  date: { type: Date, default: Date.now }
});

// 👇 IMPORTANT: Prevent overwrite error
export default mongoose.models.Order || mongoose.model("Order", orderSchema);

