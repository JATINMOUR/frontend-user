import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-beta-silk-33.vercel.app/api"
});

export default api;

