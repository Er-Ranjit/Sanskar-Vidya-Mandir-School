import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    fatherName: {
      type: String,
      required: true,
      trim: true,
    },

    motherName: {
      type: String,
      required: true,
      trim: true,
    },

    className: {
      type: String,
      required: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      required: true,
    },

    previousSchool: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  
  {
    timestamps: true,
  }
);

export default mongoose.model("Admission", admissionSchema);