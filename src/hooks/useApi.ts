import axios from "axios";

import { GetCommitData } from "../interfaces/github-response";

const api = axios.create({
  baseURL : import.meta.env.VITE_APP_URL_SERVER,
  headers : {
    "Content-Type" : "application/json",
  }
})

export const useApi = () =>{

  
  const getCommitData = async ( page : number = 1 , url? : string ) =>{
    
    try {
      const resp = await api.get<GetCommitData>(`/?page=${page}&linkGitHubRepo=${url ? url : ""}`);
      return resp.data;
      
    } catch (error) {
      return;
    }


  }

  return {
    getCommitData,
  }
}