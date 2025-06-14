// src/lib/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api", // Update as per deployment
});

export default instance;
