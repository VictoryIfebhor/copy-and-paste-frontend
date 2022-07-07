import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    console.log(token);
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});
