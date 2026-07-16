import API from "../api/axios";

// Get All Events
export const getEvents = () =>
  API.get("/events");

// Get Single Event
export const getEventById = (id) =>
  API.get(`/events/${id}`);

// Add Event
export const addEvent = (formData) =>
  API.post("/events", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Event
export const updateEvent = (id, formData) =>
  API.put(`/events/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete Event
export const deleteEvent = (id) =>
  API.delete(`/events/${id}`);