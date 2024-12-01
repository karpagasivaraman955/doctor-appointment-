import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (data) => API.post("/users/login", data);
export const getDoctors = () => API.get("/users/doctors");
export const getAppointments = () =>
  API.get("/appointments", { headers: { Authorization: localStorage.getItem("token") } });
export const bookAppointment = (data) =>
  API.post("/appointments", data, { headers: { Authorization: localStorage.getItem("token") } });
