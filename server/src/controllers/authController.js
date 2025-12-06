import User from "../models/User.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

//Generate random 4-digit OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

//Send OTP API
export const sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: "Phone is required" });

    let user = await User.findOne({ phone });
    const otp = generateOTP();

    if (!user) {
      // Create a new user with OTP
      user = await User.create({ phone, otp, isVerified: false });
    } else {
      // Update OTP for existing user
      user.otp = otp;
      user.isVerified = false;
      await user.save();
    }

    //Log OTP in backend terminal
    console.log("Generated OTP for", phone, ":", otp);

    return res.json({
  message: "OTP sent successfully",
  otp  // Send OTP to frontend for demo
});

  } catch (err) {
    console.error("Error sending OTP:", err.message);
    return res.status(500).json({ error: "Server Error" });
  }
};

// Verify OTP API
export const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp)
      return res.status(400).json({ error: "Phone & OTP required" });

    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (String(user.otp) !== String(otp))
      return res.status(400).json({ error: "Invalid OTP" });

    // OTP Verified → Update user status
    user.isVerified = true;
    user.otp = null;
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "OTP Verified",
      token
    });

  } catch (err) {
    console.error("OTP Verification Error:", err.message);
    return res.status(500).json({ error: "Server Error" });
  }
};
