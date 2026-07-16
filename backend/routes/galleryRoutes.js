import express from "express";

import {
  addGallery,
  getGallery,
  getGalleryById,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryController.js";

import upload from "../middleware/upload.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ============================
// Gallery Routes
// ============================

// Add Gallery
router.post(
  "/",
  protect,
  upload.single("image"),
  addGallery
);

// Get All Gallery
router.get("/", getGallery);

// Get Single Gallery
router.get("/:id", getGalleryById);

// Update Gallery
router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateGallery
);

// Delete Gallery
router.delete("/:id", protect, deleteGallery);

export default router;