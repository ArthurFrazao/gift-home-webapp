import axios from "axios";

const api = axios.create({
  baseURL: " https://dar1k9bon6.execute-api.us-east-2.amazonaws.com",
});

export default api;
