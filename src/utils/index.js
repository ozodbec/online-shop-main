import axios from "axios";
const url = "https://json-api.uz/api/project/booksuz";
export const customFetch = axios.create({
  baseURL: url,
});
