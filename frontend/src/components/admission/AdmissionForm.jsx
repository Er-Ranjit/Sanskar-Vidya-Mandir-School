import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  addAdmission,
  updateAdmission,
} from "../../services/admissionService";

const initialState = {
  studentName: "",
  fatherName: "",
  motherName: "",
  className: "",
  dob: "",
  gender: "Male",
  mobile: "",
  email: "",
  address: "",
  previousSchool: "",
  status: "Pending",
};

const AdmissionForm = ({
  fetchAdmissions,
  editingAdmission,
  setEditingAdmission,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingAdmission) {
      setFormData({
        ...editingAdmission,
        dob: editingAdmission.dob?.split("T")[0],
      });
    }
  }, [editingAdmission]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingAdmission) {
        await updateAdmission(editingAdmission._id, formData);
        toast.success("Admission Updated Successfully");
      } else {
        await addAdmission(formData);
        toast.success("Admission Added Successfully");
      }

      setFormData(initialState);
      setEditingAdmission(null);
      fetchAdmissions();

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        {editingAdmission ? "Update Admission" : "Add Admission"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >
        <input
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          name="fatherName"
          placeholder="Father Name"
          value={formData.fatherName}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          name="motherName"
          placeholder="Mother Name"
          value={formData.motherName}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          name="className"
          placeholder="Class"
          value={formData.className}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded p-3"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-3"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border rounded p-3 md:col-span-2"
        />

        <input
          name="previousSchool"
          placeholder="Previous School"
          value={formData.previousSchool}
          onChange={handleChange}
          className="border rounded p-3"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded p-3"
        >
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded md:col-span-2"
        >
          {editingAdmission ? "Update Admission" : "Add Admission"}
        </button>

      </form>

    </div>
  );
};

export default AdmissionForm;