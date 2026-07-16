import express from "express";

import {
  addContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/", addContact);

// Admin
router.get("/", protect, getContacts);

router.get("/:id", protect, getContactById);

router.put("/:id", protect, updateContact);

router.delete("/:id", protect, deleteContact);

export default router;