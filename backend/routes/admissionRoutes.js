import express from "express";

import {
  addAdmission,
  getAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
} from "../controllers/admissionController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Admission
router.post("/", protect, addAdmission);

// Get All Admissions
router.get("/", protect, getAdmissions);

// Get Single Admission
router.get("/:id", protect, getAdmissionById);

// Update Admission
router.put("/:id", protect, updateAdmission);

// Delete Admission
router.delete("/:id", protect, deleteAdmission);

export default router;