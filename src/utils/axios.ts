import axios from "axios";

export const api = axios.create({
  baseURL : import.meta.env.VITE_APP_URL_SERVER,
  headers : {
    "Content-Type" : "application/json",
    "User-Agent": "chaboxx",
  },
  // params:{
  //   "access_token" : "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",
  //   "user" : "chaboxx",
  //   "password": 'Cpython++;rgrc1944',
  // },
  auth:{
    username: "de0f96cefe2d22cf464a",
    password :"d7ba2fe35105c014c69ddb2a7f698718e7d96bac"
  }
})
