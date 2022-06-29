import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
