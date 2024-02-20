import axios from "axios";

const API_BASE_URL = process.env["NEXT_PUBLIC_API_ENDPOINT"];
const BEARER_TOKEN = process.env["NEXT_PUBLIC_BEARER_TOKEN"];

const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = `Bearer ${BEARER_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.log("You dont have authorized to access this page");
      } else if (status === 403) {
        console.log("You dont have permissions to perform this task");
      } else if (status === 500) {
        console.log("Server Error");
      }

      return Promise.reject(error.response);
    }
  },
);

export function getData<T>(response: T) {
  return response;
}

export default request;
