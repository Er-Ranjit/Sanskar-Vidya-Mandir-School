import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: [
        "Annual Day",
        "Sports",
        "Republic Day",
        "Independence Day",
        "Science Fair",
        "Classroom",
        "Others",
      ],
      default: "Others",
    },

    image: {
      type: String,
      required: true,
    },

    eventDate: {
      type: Date,
      default: Date.now,
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

export default mongoose.model("Gallery", gallerySchema);