import { useEffect, useState } from "react";

const TeacherForm = ({ onSubmit, editingTeacher, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    subject: "",
    salary: "",
    address: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingTeacher) {
      setFormData({
        name: editingTeacher.name || "",
        email: editingTeacher.email || "",
        phone: editingTeacher.phone || "",
        qualification: editingTeacher.qualification || "",
        subject: editingTeacher.subject || "",
        salary: editingTeacher.salary || "",
        address: editingTeacher.address || "",
        status: editingTeacher.status || "Active",
      });
    }
  }, [editingTeacher]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    if (!editingTeacher) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        subject: "",
        salary: "",
        address: "",
        status: "Active",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">

      <h2 className="text-2xl font-bold mb-5">
        {editingTeacher ? "Update Teacher" : "Add Teacher"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Teacher Name"
          value={formData.name}
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
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
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

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <div className="md:col-span-2 flex gap-3">

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
          >
            {editingTeacher ? "Update Teacher" : "Add Teacher"}
          </button>

          {editingTeacher && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-6 py-3 rounded"
            >
              Cancel
            </button>
          )}

        </div>

      </form>
    </div>
  );
};

export default TeacherForm;