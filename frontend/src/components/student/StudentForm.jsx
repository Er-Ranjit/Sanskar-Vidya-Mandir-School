import { useEffect, useState } from "react";

const StudentForm = ({ onSubmit, editingStudent, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    rollNumber: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name || "",
        className: editingStudent.className || "",
        rollNumber: editingStudent.rollNumber || "",
        phone: editingStudent.phone || "",
        email: editingStudent.email || "",
        address: editingStudent.address || "",
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    if (!editingStudent) {
      setFormData({
        name: "",
        className: "",
        rollNumber: "",
        phone: "",
        email: "",
        address: "",
      });
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-4">
        {editingStudent ? "Update Student" : "Add Student"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="className"
          placeholder="Class"
          value={formData.className}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <div className="md:col-span-2 flex gap-3">

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
          >
            {editingStudent ? "Update Student" : "Add Student"}
          </button>

          {editingStudent && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded"
            >
              Cancel
            </button>
          )}

        </div>

      </form>
    </div>
  );
};

export default StudentForm;