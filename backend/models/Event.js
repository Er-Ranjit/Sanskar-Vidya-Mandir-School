import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
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

    image: {
      type: String,
      required: true,
    },

    eventDate: {
      type: Date,
      required: true,
    },

    eventTime: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    organizer: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: [
        "Academic",
        "Sports",
        "Cultural",
        "Holiday",
        "Meeting",
        "Others",
      ],
      default: "Others",
    },

    status: {
      type: String,
      enum: ["Upcoming", "Completed", "Cancelled"],
      default: "Upcoming",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);