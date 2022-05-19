
import axios from "axios";

axios.create({
  baseURL: process.env.URL_SERVER,
})

export const useApi = () =>{


  const getCommitData = ( urlRepo : string) =>{

    axios.get()

  }

}