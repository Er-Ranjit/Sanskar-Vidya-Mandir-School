import Settings from "../models/Settings.js";
import fs from "fs";
import path from "path";

// ==========================
// Get Settings
// ==========================
export const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create({
        schoolName: "Sanskar Vidya Mandir",
      });
    }

    res.status(200).json({
      success: true,
      settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Settings
// ==========================
export const updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = new Settings();
    }

    // Logo Upload
    if (req.files?.logo) {
      if (settings.logo) {
        const oldLogo = path.join(
          process.cwd(),
          settings.logo.replace("/", "")
        );

        if (fs.existsSync(oldLogo)) {
          fs.unlinkSync(oldLogo);
        }
      }

      settings.logo = `/uploads/logo/${req.files.logo[0].filename}`;
    }

    // Principal Photo Upload
    if (req.files?.principalPhoto) {
      if (settings.principalPhoto) {
        const oldPhoto = path.join(
          process.cwd(),
          settings.principalPhoto.replace("/", "")
        );

        if (fs.existsSync(oldPhoto)) {
          fs.unlinkSync(oldPhoto);
        }
      }

      settings.principalPhoto = `/uploads/principal/${req.files.principalPhoto[0].filename}`;
    }

    // School Information
    settings.schoolName = req.body.schoolName;
    settings.establishedYear = req.body.establishedYear;
    settings.successRate = req.body.successRate;
    settings.totalStudents = req.body.totalStudents;
    settings.totalTeachers = req.body.totalTeachers;

    // Principal Information
    settings.principalName = req.body.principalName;
    settings.principalDesignation = req.body.principalDesignation;
    settings.principalMessage = req.body.principalMessage;

    // Contact Information
    settings.email = req.body.email;
    settings.phone = req.body.phone;
    settings.address = req.body.address;
    settings.website = req.body.website;

    // Social Media
    settings.facebook = req.body.facebook;
    settings.instagram = req.body.instagram;
    settings.youtube = req.body.youtube;

    // About
    settings.about = req.body.about;
    settings.mission = req.body.mission;
    settings.vision = req.body.vision;

    await settings.save();

    res.status(200).json({
      success: true,
      message: "Settings Updated Successfully",
      settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};