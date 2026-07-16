import express from "express";

import {
  addNotice,
  getNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
} from "../controllers/noticeController.js";

import upload from "../middleware/noticeUpload.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Notice
router.post(
  "/",
  protect,
  upload.single("file"),
  addNotice
);

// Get All Notices
router.get("/", getNotices);

// Get Single Notice
router.get("/:id", getNoticeById);

// Update Notice
router.put(
  "/:id",
  protect,
  upload.single("file"),
  updateNotice
);

// Delete Notice
router.delete(
  "/:id",
  protect,
  deleteNotice
);

export default router;