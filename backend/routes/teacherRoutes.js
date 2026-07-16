import express from "express";

import {
  addTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacherController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addTeacher);

router.get("/", protect, getTeachers);

router.get("/:id", protect, getTeacherById);

router.put("/:id", protect, updateTeacher);

router.delete("/:id", protect, deleteTeacher);

export default router;