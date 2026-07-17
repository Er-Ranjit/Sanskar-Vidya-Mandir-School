import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("=================================");
console.log("📧 EMAIL_USER:", process.env.EMAIL_USER);
console.log("🔑 EMAIL_PASS Exists:", !!process.env.EMAIL_PASS);
console.log("🔢 EMAIL_PASS Length:", process.env.EMAIL_PASS?.length);
console.log("=================================");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Port 587 => false

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  requireTLS: true,

  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2",
  },

  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,

  pool: true,
  maxConnections: 5,
  maxMessages: 100,
});

// Verify SMTP Connection
(async () => {
  try {
    await transporter.verify();
    console.log("✅ Gmail SMTP Connected Successfully");
  } catch (error) {
    console.error("❌ Gmail SMTP Verify Failed");
    console.error(error);
  }
})();

export default transporter;