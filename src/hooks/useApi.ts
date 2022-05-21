
import { api } from "../utils/axios";


import { GetCommitData } from "../interfaces/github-response";


export const useApi = ( path: string ) =>{


  const getCommitData = async ( page : number = 1 , url? : string ) =>{
    
    try {
      const resp = await api.get<GetCommitData>(`${path}?page=${page}&linkGitHubRepo=${url ? url : ""}&user=chaboxx&password=Cpython++;rgrc1944&access_token=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`);
      return resp.data;
      
    } catch (error) {
      return;
    }

  }

  return {
    getCommitData,
  }
}