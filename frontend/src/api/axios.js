import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/settings`;

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getSettings = () => axios.get(API);

export const updateSettings = (data) =>
  axios.put(API, data, authConfig());