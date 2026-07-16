import API from "../api/axios";

export const getSettings = () =>
  API.get("/api/settings");

export const updateSettings = (data) =>
  API.put("/api/settings", data);