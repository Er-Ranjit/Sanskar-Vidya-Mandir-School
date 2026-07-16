import express from "express";

import {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Student
router.post("/", protect, addStudent);

// Get All Students
router.get("/", protect, getStudents);

// Get Student By Id
router.get("/:id", protect, getStudentById);

// Update Student
router.put("/:id", protect, updateStudent);

// Delete Student
router.delete("/:id", protect, deleteStudent);

export default router;