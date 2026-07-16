import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: true,
    },

    establishedYear: {
      type: Number,
      default: 2005,
    },

    successRate: {
      type: String,
      default: "100%",
    },

    totalStudents: {
      type: Number,
      default: 1000,
    },

    totalTeachers: {
      type: Number,
      default: 50,
    },

    // 👇 यहाँ से नया Code जोड़ो
    principalName: String,

    principalDesignation: {
      type: String,
      default: "Principal",
    },

    principalMessage: {
      type: String,
      default: "",
    },

    principalPhoto: {
      type: String,
      default: "",
    },

    email: String,

    phone: String,

    address: String,

    website: String,

    facebook: String,

    instagram: String,

    youtube: String,

    about: String,

    mission: String,

    vision: String,

    logo: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Settings", settingsSchema);