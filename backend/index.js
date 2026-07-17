import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dns from "node:dns";
import path from "path";

import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";
import { loginAdmin } from "./controllers/adminController.js"; // ✅ Direct Import for Fallback Route
import studentRoutes from "./routes/studentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"; 

import errorMiddleware from "./middleware/errorMiddleware.js";

// =====================
// Load Environment Variables
// =====================
dotenv.config();

// =====================
// DNS Settings
// =====================
dns.setServers([
  "8.8.8.8",
  "8.8.4.4",
  "1.1.1.1",
]);

// =====================
// Connect Database
// =====================
await connectDB();

const app = express();

// =====================
// Middlewares
// =====================
app.use(cors({
  origin: "*", // ✅ Allows Vercel and local requests globally
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle preflight OPTIONS requests immediately
app.options("*", cors());

// =====================
// Static Folder
// =====================
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

// =====================
// Home Route
// =====================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Sanskar Vidya Mandir Backend Running Securely",
  });
});

// =====================
// API Routes
// =====================

// ✅ Direct Fail-Safe Admin Login Route (Router bypass configuration)
app.post("/api/admin/login", loginAdmin);

// Admin Standard Router
app.use("/api/admin", adminRoutes);

// Students
app.use("/api/students", studentRoutes);

// Dashboard
app.use("/api/dashboard", dashboardRoutes);

// Teachers
app.use("/api/teachers", teacherRoutes);

// Admissions
app.use("/api/admissions", admissionRoutes);

// Gallery
app.use("/api/gallery", galleryRoutes);

// Events
app.use("/api/events", eventRoutes);

// Notices
app.use("/api/notices", noticeRoutes);

// Settings
app.use("/api/settings", settingsRoutes);

// Contact
app.use("/api/contact", contactRoutes);

// =====================
// 404 Route
// =====================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route Not Found - ${req.method} ${req.url}`,
  });
});

// =====================
// Error Middleware
// =====================
app.use(errorMiddleware);

// =====================
// Server
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});
