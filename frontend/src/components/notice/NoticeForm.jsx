import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  addNotice,
  updateNotice,
} from "../../services/noticeService";

const initialState = {

  title: "",
  description: "",
  category: "General",
  publishDate: "",
  expiryDate: "",
  status: "Active",

};

const NoticeForm = ({
  fetchNotices,
  editingNotice,
  setEditingNotice,
}) => {

  const [formData, setFormData] =
    useState(initialState);

  const [file, setFile] = useState(null);

  useEffect(() => {

    if (editingNotice) {

      setFormData({

        title: editingNotice.title,
        description: editingNotice.description,
        category: editingNotice.category,
        publishDate:
          editingNotice.publishDate?.split("T")[0],
        expiryDate:
          editingNotice.expiryDate?.split("T")[0],
        status: editingNotice.status,

      });

    }

  }, [editingNotice]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("publishDate", formData.publishDate);
      data.append("expiryDate", formData.expiryDate);
      data.append("status", formData.status);

      if (file) {

        data.append("file", file);

      }

      if (editingNotice) {

        await updateNotice(
          editingNotice._id,
          data
        );

        toast.success("Notice Updated");

      } else {

        await addNotice(data);

        toast.success("Notice Added");

      }

      setFormData(initialState);
      setFile(null);
      setEditingNotice(null);

      fetchNotices();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Something Went Wrong"
      );

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        {editingNotice
          ? "Update Notice"
          : "Add Notice"}

      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Notice Title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >

          <option>General</option>
          <option>Exam</option>
          <option>Holiday</option>
          <option>Urgent</option>
          <option>Admission</option>
          <option>Sports</option>

        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded-lg p-3 md:col-span-2"
        />

        <input
          type="date"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >

          <option>Active</option>
          <option>Inactive</option>

        </select>

        <input
          type="file"
          onChange={(e)=>setFile(e.target.files[0])}
          className="border rounded-lg p-3"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 md:col-span-2"
        >

          {editingNotice
            ? "Update Notice"
            : "Add Notice"}

        </button>

      </form>

    </div>

  );

};

export default NoticeForm;