import API from "../api/axios";

// =======================
// Send Contact Message
// =======================
export const addContact = (data) =>
  API.post("/contact", data);

// =======================
// Get All Contacts
// =======================
export const getContacts = () =>
  API.get("/contact");

// =======================
// Get Single Contact
// =======================
export const getContactById = (id) =>
  API.get(`/contact/${id}`);

// =======================
// Update Contact Status
// =======================
export const updateContact = (id, data) =>
  API.put(`/contact/${id}`, data);

// =======================
// Delete Contact
// =======================
export const deleteContact = (id) =>
  API.delete(`/contact/${id}`);