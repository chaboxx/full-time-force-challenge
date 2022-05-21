import axios from "axios";

export const api = axios.create({
  baseURL : import.meta.env.VITE_APP_URL_SERVER,
  headers : {
    "Content-Type" : "application/json",
  },
})
