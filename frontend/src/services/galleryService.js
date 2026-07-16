import API from "../api/axios";

// =======================
// Get All Gallery
// =======================
export const getGallery = () => API.get("/gallery");

// =======================
// Get Single Gallery
// =======================
export const getGalleryById = (id) =>
  API.get(`/gallery/${id}`);

// =======================
// Add Gallery
// =======================
export const addGallery = (formData) =>
  API.post("/gallery", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// =======================
// Update Gallery
// =======================
export const updateGallery = (id, formData) =>
  API.put(`/gallery/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// =======================
// Delete Gallery
// =======================
export const deleteGallery = (id) =>
  API.delete(`/gallery/${id}`);