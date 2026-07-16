import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    rollNo: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    admissionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);