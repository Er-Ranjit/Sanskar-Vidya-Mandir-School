import axios from "../api/axios";

// Get All Admissions
export const getAdmissions = () => {
  return axios.get("/admissions");
};

// Add Admission
export const addAdmission = (data) => {
  return axios.post("/admissions", data);
};

// Get Single Admission
export const getAdmission = (id) => {
  return axios.get(`/admissions/${id}`);
};

// Update Admission
export const updateAdmission = (id, data) => {
  return axios.put(`/admissions/${id}`, data);
};

// Delete Admission
export const deleteAdmission = (id) => {
  return axios.delete(`/admissions/${id}`);
};