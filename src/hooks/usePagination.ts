import { useEffect, useState } from "react";

import { api } from "../utils/axios";

import { GetCommitData, GitHubCommit } from "../interfaces/github-response";


export const usePagination = () => {
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [commitsInformationData, setCommitsInformationData] = useState<GitHubCommit[]>([]);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    api.get<GetCommitData>(`/get-data?page=${1}`)
      .then(resp=>{
        setCommitsInformationData(resp.data.data);
        setNumberOfPages(Math.ceil(resp.data.dataLength/6));
        setChecking(false);
      })
      .catch(error=>{
        throw new Error("Something fail in the pagination");
      })

  }, [])
  

  const handleDataCommitDefault = async () =>{
    setChecking(true);

    const resp = await api.get<GetCommitData>(`/get-data?page=${currentPage}`)
    setCommitsInformationData(resp.data.data);

    setChecking(false);
    

  }

  const handleFormDataCommitOther = async ( e:React.FormEvent<HTMLFormElement>, url : string ) =>{
    e.preventDefault();
    if ( !url ){
      return;
    }
    setChecking(true);

    setCurrentPage(1);
    const resp = await api.get<GetCommitData>(`/get-data?page=${1}&linkGitHubRepo=${url}`)
    setCommitsInformationData(resp.data.data);
    setNumberOfPages(Math.ceil(resp.data.dataLength/6));

    setChecking(false);

  }

  
  //CURRENT PAGE 1 - NUMBER OF PAGES
  const changeCurrentPage = ( option : "add" | "subtract" | "value", value? : number ) =>{
    console.log({numberOfPages});
    switch (option) {
      case "add":
        if ( currentPage < numberOfPages ){
          
          console.log({add : currentPage});
          setCurrentPage(currentPage+1);
        }
        break;
        
      case "subtract":
        
        if ( currentPage > 2){
          
          console.log({s : currentPage});
          setCurrentPage(currentPage-1);
          
        }
        break;
        
      case "value":
        
        if ( value  && value <= numberOfPages && value > 0 ){
          console.log({v : currentPage});
          setCurrentPage(value);
        }
        break;
          

      default:
        break;
    }

  }

  return {
    checking,
    commitsInformationData,
    currentPage,
    numberOfPages,
    changeCurrentPage,
    handleDataCommitDefault,
    handleFormDataCommitOther,
  }
  
}