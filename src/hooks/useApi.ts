
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_SERVER,
})

export const useApi = () =>{

  
  const getCommitData = async ( urlRepo : string) =>{

    const resp = await api.get("/get-commit-data");

    console.log({resp});

  }

  return {
    getCommitData,
  }
}