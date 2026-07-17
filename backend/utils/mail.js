import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Debug Logs
console.log("=================================");
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS Exists:", !!process.env.EMAIL_PASS);
console.log("EMAIL_PASS Length:", process.env.EMAIL_PASS?.length);
console.log("=================================");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Port 587 => false
  requireTLS: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: false,
  },

  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000,
});

// Verify SMTP
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Gmail SMTP Error:");
    console.error(error);
  } else {
    console.log("✅ Gmail SMTP Connected Successfully");
  }
});

export default transporter;