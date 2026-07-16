import Gallery from "../models/Gallery.js";
import fs from "fs";
import path from "path";

// =============================
// Add Gallery
// =============================
export const addGallery = async (req, res) => {
  try {
    const { title, description, category, eventDate, status } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please Upload Image",
      });
    }

    const gallery = await Gallery.create({
      title,
      description,
      category,
      eventDate,
      status,
      image: `/uploads/gallery/${req.file.filename}`,
    });

    res.status(201).json({
      success: true,
      message: "Gallery Image Added Successfully",
      gallery,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Get All Gallery
// =============================
export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: gallery.length,
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Get Single Gallery
// =============================
export const getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery Not Found",
      });
    }

    res.status(200).json({
      success: true,
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Update Gallery
// =============================
export const updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery Not Found",
      });
    }

    if (req.file) {
      const oldImage = path.join(
        process.cwd(),
        gallery.image.replace("/", "")
      );

      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }

      gallery.image = `/uploads/gallery/${req.file.filename}`;
    }

    gallery.title = req.body.title;
    gallery.description = req.body.description;
    gallery.category = req.body.category;
    gallery.eventDate = req.body.eventDate;
    gallery.status = req.body.status;

    await gallery.save();

    res.status(200).json({
      success: true,
      message: "Gallery Updated Successfully",
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Delete Gallery
// =============================
export const deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery Not Found",
      });
    }

    const imagePath = path.join(
      process.cwd(),
      gallery.image.replace("/", "")
    );

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await gallery.deleteOne();

    res.status(200).json({
      success: true,
      message: "Gallery Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};