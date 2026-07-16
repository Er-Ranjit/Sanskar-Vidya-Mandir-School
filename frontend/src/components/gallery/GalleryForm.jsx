import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  addGallery,
  updateGallery,
} from "../../services/galleryService";

const initialState = {
  title: "",
  description: "",
  category: "Others",
  eventDate: "",
  status: "Active",
};

const GalleryForm = ({
  fetchGallery,
  editingGallery,
  setEditingGallery,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingGallery) {
      setFormData({
        title: editingGallery.title,
        description: editingGallery.description,
        category: editingGallery.category,
        eventDate: editingGallery.eventDate?.split("T")[0],
        status: editingGallery.status,
      });

      setPreview(
  `${import.meta.env.VITE_SERVER_URL}${editingGallery.image}`
);
    }
  }, [editingGallery]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      return toast.error("Please select a valid image.");
    }

    if (file.size > 2 * 1024 * 1024) {
      return toast.error("Image must be less than 2 MB.");
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setFormData(initialState);
    setImage(null);
    setPreview("");
    setEditingGallery(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (image) {
        data.append("image", image);
      }

      if (editingGallery) {
        await updateGallery(editingGallery._id, data);
        toast.success("Gallery Updated Successfully");
      } else {
        await addGallery(data);
        toast.success("Gallery Added Successfully");
      }

      resetForm();
      fetchGallery();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        {editingGallery ? "Update Gallery" : "Add Gallery"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Gallery Title"
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
          <option>Annual Day</option>
          <option>Sports</option>
          <option>Republic Day</option>
          <option>Independence Day</option>
          <option>Science Fair</option>
          <option>Classroom</option>
          <option>Others</option>
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
          name="eventDate"
          value={formData.eventDate}
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
          accept="image/*"
          onChange={handleImage}
          className="md:col-span-2"
        />

        {preview && (
          <div className="md:col-span-2">
            <img
              src={preview}
              alt="Preview"
              className="w-52 h-40 object-cover rounded-lg border"
            />
          </div>
        )}

        <button
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg md:col-span-2 transition"
        >
          {loading
            ? "Uploading..."
            : editingGallery
            ? "Update Gallery"
            : "Upload Gallery"}
        </button>

      </form>

    </div>
  );
};

export default GalleryForm;