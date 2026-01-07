import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-beta-silk-33.vercel.app/api/reviews"
});

export default api;

