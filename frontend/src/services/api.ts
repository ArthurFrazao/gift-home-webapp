import axios from "axios";

const api = axios.create({
  baseURL: "https://nza9uq3m3a.execute-api.us-east-2.amazonaws.com",
});

export default api;
