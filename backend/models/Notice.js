import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "General",
        "Exam",
        "Holiday",
        "Urgent",
        "Admission",
        "Sports",
      ],
      default: "General",
    },

    file: {
      type: String,
      default: "",
    },

    publishDate: {
      type: Date,
      required: true,
    },

    expiryDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Notice", noticeSchema);