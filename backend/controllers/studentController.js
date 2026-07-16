import Student from "../models/Student.js";
import asyncHandler from "../utils/asyncHandler.js";

// =============================
// Add Student
// =============================
export const addStudent = asyncHandler(async (req, res) => {

  const student = await Student.create(req.body);

  res.status(201).json({
    success: true,
    message: "Student Added Successfully",
    student,
  });

});

// =============================
// Get All Students
// =============================
export const getStudents = asyncHandler(async (req, res) => {

  const students = await Student.find()
    .sort({ createdAt: -1 })
    .lean();

  res.status(200).json({
    success: true,
    total: students.length,
    students,
  });

});

// =============================
// Get Single Student
// =============================
export const getStudentById = asyncHandler(async (req, res) => {

  const student = await Student.findById(req.params.id).lean();

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student Not Found",
    });
  }

  res.status(200).json({
    success: true,
    student,
  });

});

// =============================
// Update Student
// =============================
export const updateStudent = asyncHandler(async (req, res) => {

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student Not Found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Student Updated Successfully",
    student,
  });

});

// =============================
// Delete Student
// =============================
export const deleteStudent = asyncHandler(async (req, res) => {

  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student Not Found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Student Deleted Successfully",
  });

});