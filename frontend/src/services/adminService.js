import API from "../api/axios";

export const loginAdmin = async (data) => {
  return await API.post("/admin/login", data);
};

export const registerAdmin = async (data) => {
  return await API.post("/admin/register", data);
};