import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  addEvent,
  updateEvent,
} from "../../services/eventService";

const initialState = {
  title: "",
  description: "",
  eventDate: "",
  eventTime: "",
  location: "",
  organizer: "",
  category: "Others",
  status: "Upcoming",
};

const EventForm = ({
  fetchEvents,
  editingEvent,
  setEditingEvent,
}) => {

  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {

    if (editingEvent) {

      setFormData({
        title: editingEvent.title,
        description: editingEvent.description,
        eventDate: editingEvent.eventDate?.split("T")[0],
        eventTime: editingEvent.eventTime,
        location: editingEvent.location,
        organizer: editingEvent.organizer,
        category: editingEvent.category,
        status: editingEvent.status,
      });

      setPreview(
        `http://localhost:5000${editingEvent.image}`
      );

    }

  }, [editingEvent]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("eventDate", formData.eventDate);
      data.append("eventTime", formData.eventTime);
      data.append("location", formData.location);
      data.append("organizer", formData.organizer);
      data.append("category", formData.category);
      data.append("status", formData.status);

      if (image) {
        data.append("image", image);
      }

      if (editingEvent) {

        await updateEvent(editingEvent._id, data);

        toast.success("Event Updated Successfully");

      } else {

        await addEvent(data);

        toast.success("Event Added Successfully");

      }

      setFormData(initialState);
      setImage(null);
      setPreview("");

      setEditingEvent(null);

      fetchEvents();

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

        {editingEvent
          ? "Update Event"
          : "Add Event"}

      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          type="text"
          name="organizer"
          placeholder="Organizer"
          value={formData.organizer}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded-lg p-3 md:col-span-2"
          required
        />

        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          type="time"
          name="eventTime"
          value={formData.eventTime}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option>Academic</option>
          <option>Sports</option>
          <option>Cultural</option>
          <option>Holiday</option>
          <option>Meeting</option>
          <option>Others</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option>Upcoming</option>
          <option>Completed</option>
          <option>Cancelled</option>
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
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg md:col-span-2"
        >
          {editingEvent
            ? "Update Event"
            : "Add Event"}
        </button>

      </form>

    </div>

  );
};

export default EventForm;