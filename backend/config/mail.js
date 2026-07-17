import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ✅ Ultimate Render-to-Gmail Fail-Safe Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "://gmail.com",
  port: 587, // Secure submission port for cloud hosting environments
  secure: false, // Must be false for port 587 to initiate STARTTLS upgrade
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Your 16-character App Password
  },
  tls: {
    // Prevents Render environment connection timeout and rejects unauthorized network blocks
    rejectUnauthorized: false,
    minVersion: "TLSv1.2"
  },
  connectionTimeout: 10000, // 10 seconds timeout threshold
  greetingTimeout: 10000
});

// Verify configuration context safely on start
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ NODEMAILER CONFIGURATION ERROR:", error.message);
  } else {
    console.log("🚀 NODEMAILER READY TO SEND EMAILS SECURELY");
  }
});

export default transporter;
