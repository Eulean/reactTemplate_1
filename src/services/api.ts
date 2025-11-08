import { config } from "@/lib/config";
import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   headers: { "Content-Type": "application/json" },
// });

const api = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30_000,
});

// request interceptor to add auth token if exist
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// response interceptor : centralized error handling
api.interceptors.response.use(
  (res) => res,
  (error) => {
    // you can add global handling for 401, 403, etc...
    if (error?.response?.status === 401) {
      // optional : clear token , redirect , or emit event
      localStorage.removeItem("token");
      // window.location.href = "/login"; // if you add auth pages
    }

    return Promise.reject(error);
  },
);

export default api;
