import Student from "../models/Student.js";
import asyncHandler from "../utils/asyncHandler.js";

// =============================
// Add Student
// =============================
export const addStudent = asyncHandler(async (req, res) => {
  const { name, className, rollNumber, phone, email, address } = req.body;

  // 1. Check required fields manually to catch early errors
  if (!name || (!className && !req.body.class) || !rollNumber) {
    return res.status(400).json({
      success: false,
      message: "Name, Class, and Roll Number are required.",
    });
  }

  // 2. Map frontend 'className' to mongoose 'class' field if required by schema
  const studentData = {
    name,
    class: className || req.body.class, // Fallback check for schema compatibility
    rollNumber: Number(rollNumber),
    phone: phone || "",
    email: email || "",
    address: address || ""
  };

  // 3. Double-check unique database constraints to avoid 500 crash
  const existingStudent = await Student.findOne({ 
    rollNumber: studentData.rollNumber, 
    class: studentData.class 
  });
  
  if (existingStudent) {
    return res.status(400).json({
      success: false,
      message: `Roll number ${rollNumber} already exists in this class.`,
    });
  }

  // 4. Save Entry safely
  const student = await Student.create(studentData);

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
