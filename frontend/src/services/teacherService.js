import API from "../api/axios";

// Get All Teachers
export const getTeachers = () => API.get("/teachers");

// Add Teacher
export const addTeacher = (data) => API.post("/teachers", data);

// Update Teacher
export const updateTeacher = (id, data) =>
  API.put(`/teachers/${id}`, data);

// Delete Teacher
export const deleteTeacher = (id) =>
  API.delete(`/teachers/${id}`);

// Get Single Teacher
export const getTeacherById = (id) =>
  API.get(`/teachers/${id}`);