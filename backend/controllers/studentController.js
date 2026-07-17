import Student from "../models/Student.js";
import asyncHandler from "../utils/asyncHandler.js";

// =============================
// Add Student
// =============================
export const addStudent = asyncHandler(async (req, res) => {
  // Pure req.body ka log check karne ke liye console me print karein
  console.log("RECEIVED STUDENT DATA FROM FRONTEND:", req.body);

  // Frontend se alag-alag tarike ke aane wale saare naamo ko ek sath target karein
  const name = req.body.name || req.body.studentName || req.body["Student Name"];
  const classVal = req.body.className || req.body.class || req.body["Class"];
  const rollVal = req.body.rollNo || req.body.rollNumber || req.body["Roll Number"] || req.body.rollNo;
  const phone = req.body.phone || req.body["Phone"] || "Not Provided";
  const emailVal = req.body.email || req.body["Email"];
  const address = req.body.address || req.body["Address"] || "Not Provided";
  const fatherName = req.body.fatherName || req.body["Father Name"] || "Not Provided";
  const section = req.body.section || req.body["Section"] || "A";

  // 1. Minimum zaroori check jo frontend screen par zaroori hai
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Student Name is required.",
    });
  }

  // 2. Strict Data mapping (Schema matching keys)
  const studentData = {
    name: String(name).trim(),
    fatherName: String(fatherName).trim(),
    phone: String(phone).trim(),
    className: classVal ? String(classVal).trim() : "10", // Fallback class agar frontend se miss ho
    section: String(section).trim(),
    rollNo: rollVal ? Number(rollVal) : Math.floor(Math.random() * 100) + 1, // Fallback random roll agar key na mile
    address: String(address).trim()
  };

  // 3. Email handle karein unique constraint ke liye (Sirf agar khali na ho)
  if (emailVal && String(emailVal).trim() !== "") {
    studentData.email = String(emailVal).trim().toLowerCase();
    const existingEmail = await Student.findOne({ email: studentData.email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered for another student.",
      });
    }
  }

  // 4. Database entry create karein
  const student = await Student.create(studentData);

  res.status(201).json({
    success: true,
    message: "Student Added Successfully 🎉",
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
