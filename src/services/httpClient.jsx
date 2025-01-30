import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const httpClient = axios.create({
  baseURL: BASE_URL,
});
