import Admission from "../models/Admission.js";

// ============================
// Add Admission
// ============================

export const addAdmission = async (req, res) => {
  try {
    const admission = await Admission.create(req.body);

    res.status(201).json({
      success: true,
      message: "Admission Added Successfully",
      admission,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Get All Admissions
// ============================

export const getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: admissions.length,
      admissions,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Get Single Admission
// ============================

export const getAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findById(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission Not Found",
      });
    }

    res.status(200).json({
      success: true,
      admission,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Update Admission
// ============================

export const updateAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission Updated Successfully",
      admission,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Delete Admission
// ============================

export const deleteAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(
      req.params.id
    );

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};