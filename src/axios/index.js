import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
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
