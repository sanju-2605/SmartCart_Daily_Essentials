import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// CREATE PRODUCT (POST)
// src/routes/productRoutes.js
router.post("/", async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await Product.insertMany(data);
    res.status(201).json({ success: true, products: result });
  } catch (error) {
    console.log("PRODUCT CREATE ERROR:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
});


// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("PRODUCT FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET SINGLE PRODUCT BY ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json(product);
  } catch (err) {
    console.error("PRODUCT FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// UPDATE PRODUCT (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated product
    );

    if (!updatedProduct) return res.status(404).json({ error: "Product not found" });

    res.json({ success: true, product: updatedProduct });
  } catch (err) {
    console.error("PRODUCT UPDATE ERROR:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE PRODUCT (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: "Product not found" });

    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    console.error("PRODUCT DELETE ERROR:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

export default router;
