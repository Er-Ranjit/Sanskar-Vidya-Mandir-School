import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import Admission from "../models/Admission.js";
import Notice from "../models/Notice.js";
import Contact from "../models/Contact.js";

export const getDashboard = async (req, res) => {

  try {

    const totalStudents =
      await Student.countDocuments();

    const totalTeachers =
      await Teacher.countDocuments();

    const totalAdmissions =
      await Admission.countDocuments();

    const totalNotices =
      await Notice.countDocuments();

    const recentAdmissions =
      await Admission.find()
        .sort({ createdAt: -1 })
        .limit(5);

    const recentContacts =
      await Contact.find()
        .sort({ createdAt: -1 })
        .limit(5);

    res.status(200).json({
      success: true,

      data: {

        totalStudents,

        totalTeachers,

        totalAdmissions,

        totalNotices,

        recentAdmissions,

        recentContacts,

      },

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};