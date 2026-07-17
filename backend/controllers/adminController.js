import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// =======================
// Register Admin
// =======================
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check Existing Admin
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Admin
    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      },
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error during registration",
    });
  }
};

// =======================
// Login Admin
// =======================
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Attempting login for email:", email);
    console.log("JWT_SECRET status:", process.env.JWT_SECRET ? "Loaded" : "Missing");

    const admin = await Admin.findOne({ email });

    console.log("Admin lookup result:", admin ? "Found" : "Not Found");

    // ✅ Changed status from 404 to 400 to prevent browser "Route Not Found" confusion
    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin account not found. Please register first.",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Ensure JWT_SECRET is available
    const secretKey = process.env.JWT_SECRET || "fallback_secret_key_for_safety";

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      secretKey,
      { expiresIn: "7d" }
    );

    console.log("Token Generated Successfully");

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      token,
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error during login",
    });
  }
};
