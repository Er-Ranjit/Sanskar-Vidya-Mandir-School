import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dns from "node:dns";
import path from "path";

import connectDB from "./config/db.js";

// Routes Imports
import adminRoutes from "./routes/adminRoutes.js";
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

dotenv.config();
dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
await connectDB();

const app = express();

app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "🚀 Backend Running" });
});

// ✅ Explicit prefix routing for subfolder layout
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: `404 - Not Found` });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});
