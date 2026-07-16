import API from "../api/axios";

// Get All Notices
export const getNotices = () =>
  API.get("/notices");

// Get Single Notice
export const getNoticeById = (id) =>
  API.get(`/notices/${id}`);

// Add Notice
export const addNotice = (formData) =>
  API.post("/notices", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update Notice
export const updateNotice = (id, formData) =>
  API.put(`/notices/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete Notice
export const deleteNotice = (id) =>
  API.delete(`/notices/${id}`);