import Notice from "../models/Notice.js";
import fs from "fs";
import path from "path";

// ===============================
// Add Notice
// ===============================
export const addNotice = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      publishDate,
      expiryDate,
      status,
    } = req.body;

    const notice = await Notice.create({
      title,
      description,
      category,
      publishDate,
      expiryDate,
      status,
      file: req.file
        ? `/uploads/notices/${req.file.filename}`
        : "",
    });

    res.status(201).json({
      success: true,
      message: "Notice Added Successfully",
      notice,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Get All Notices
// ===============================
export const getNotices = async (req, res) => {

  try {

    const notices = await Notice.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: notices.length,
      notices,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===============================
// Get Single Notice
// ===============================
export const getNoticeById = async (req, res) => {

  try {

    const notice = await Notice.findById(req.params.id);

    if (!notice) {

      return res.status(404).json({
        success: false,
        message: "Notice Not Found",
      });

    }

    res.status(200).json({
      success: true,
      notice,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===============================
// Update Notice
// ===============================
export const updateNotice = async (req, res) => {

  try {

    const notice = await Notice.findById(req.params.id);

    if (!notice) {

      return res.status(404).json({
        success: false,
        message: "Notice Not Found",
      });

    }

    if (req.file) {

      if (notice.file) {

        const oldFile = path.join(
          process.cwd(),
          notice.file.replace("/", "")
        );

        if (fs.existsSync(oldFile)) {
          fs.unlinkSync(oldFile);
        }

      }

      notice.file = `/uploads/notices/${req.file.filename}`;
    }

    notice.title = req.body.title;
    notice.description = req.body.description;
    notice.category = req.body.category;
    notice.publishDate = req.body.publishDate;
    notice.expiryDate = req.body.expiryDate;
    notice.status = req.body.status;

    await notice.save();

    res.status(200).json({
      success: true,
      message: "Notice Updated Successfully",
      notice,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===============================
// Delete Notice
// ===============================
export const deleteNotice = async (req, res) => {

  try {

    const notice = await Notice.findById(req.params.id);

    if (!notice) {

      return res.status(404).json({
        success: false,
        message: "Notice Not Found",
      });

    }

    if (notice.file) {

      const filePath = path.join(
        process.cwd(),
        notice.file.replace("/", "")
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

    }

    await notice.deleteOne();

    res.status(200).json({
      success: true,
      message: "Notice Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
