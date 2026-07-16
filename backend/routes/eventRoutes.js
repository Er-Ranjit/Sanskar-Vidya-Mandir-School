import express from "express";

import {
  addEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

import upload from "../middleware/eventUpload.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Event
router.post(
  "/",
  protect,
  upload.single("image"),
  addEvent
);

// Get All Events
router.get("/", getEvents);

// Get Single Event
router.get("/:id", getEventById);

// Update Event
router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateEvent
);

// Delete Event
router.delete(
  "/:id",
  protect,
  deleteEvent
);

export default router;