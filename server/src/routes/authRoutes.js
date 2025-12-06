import express from "express";
import { sendOTP, verifyOTP } from "../controllers/authController.js";

const router = express.Router();

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);

import { authMiddleware } from "../middleware/authMiddleware.js";

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected Profile Access",
    user: req.user,
  });
});

export default router;
