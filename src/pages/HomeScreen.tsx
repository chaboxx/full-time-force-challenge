import { FC, useEffect, useState } from 'react';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { nanoid } from 'nanoid';

import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

import { TableInfo } from '../components/homeScreen/TableInfo';

import { useApi } from '../hooks/useApi';

import styles from "../styles/pages/HomeScreen.module.css";


import { GitHubCommit } from '../interfaces/github-response';



export const HomeScreen : FC = () => {
  
  const { getCommitData } = useApi();
  
  const [checking, setChecking] = useState(true);
  
  const [commitsInformationData, setCommitsInformationData] = useState<GitHubCommit[]>([]);
  const [auxCommitsInformationData, setAuxCommitsInformationData] = useState<GitHubCommit[]>([]);
  
  const [dataLength, setdataLength] = useState(0);
  const [auxDataLength, setAuxDataLength] = useState(0);

  const [actualPage, setActualPage] = useState(1);


  const [urlGitHubRepo, setUrlGitHubRepo] = useState("");
  const [auxUrlGitHubRepo, setAuxUrlGitHubRepo] = useState("");



  const handleChangeRepo = async ( e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if ( !urlGitHubRepo.trim() ){
      alert("Fill in the url input.")
      return;
    }
    
    const resp = await getCommitData(1,urlGitHubRepo);
    if( !resp ){
      alert("Error in the server . Try Again");
      return;
    }
    setAuxUrlGitHubRepo(urlGitHubRepo);
    setActualPage(1);
    setAuxCommitsInformationData(resp!.data);
    setAuxDataLength(resp.dataLength);
  }

  const handleGetMoreRepoData = async() =>{
    if ( auxCommitsInformationData!.length===0 ){
      const resp = await getCommitData(actualPage);
      if( !resp ){
        alert("Error in the server . Try Again");
        return;
      }
      setCommitsInformationData(resp.data);
      setdataLength(resp.dataLength)
    }else{
      const resp = await getCommitData(actualPage,auxUrlGitHubRepo);
      if( !resp ){
        alert("Error in the server . Try Again");
        return;
      }
      setAuxCommitsInformationData(resp.data);
      setAuxDataLength(resp.dataLength)
    }
  }
  const handleCommitDataDefault = ( e:React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    setActualPage(1);
    setAuxCommitsInformationData([]);
  }

  useEffect(() => {
    getCommitData().then(data=>{
      if ( !data ){
        alert("Error in the api , reload the page please.");
        return;
      }
      setCommitsInformationData(data.data);
      setdataLength(data.dataLength)
      setChecking(false);
    });
  }, [])
  
  if (checking){
    return <h1>Cargando....</h1>;
  }

  return (
    <div className={styles.home_screen_container}>
      <Navbar/>
      <main className={styles.home_screen_content_container}>
        <div className={styles.home_screen_buttons_container}>
          <div className={styles.home_screen_button_default_container}>

            <button onClick={handleCommitDataDefault} className={[styles.home_screen_button_default, "hover"].join(" ")}>Default {"(This Proyect)"}</button>
          </div>
          <div style={{flex:"1"}}></div>
          <form onSubmit={handleChangeRepo} className={styles.home_screen_search_container}>
            <input value={urlGitHubRepo} onChange={(e)=>setUrlGitHubRepo(e.target.value)} className={styles.home_screen_input_search} placeholder="Search..." type="text"/>
            <button type="submit" className={[styles.home_screen_search_button , "hover"].join(" ")}>Search Commits by Url</button>
          </form>
        </div>

        
        <TableInfo dataLength={ auxCommitsInformationData!.length===0 ?  dataLength : auxDataLength} data={ auxCommitsInformationData!.length===0 ? commitsInformationData! :  auxCommitsInformationData!} actualPage={actualPage}/>
        
        <div className={styles.table_info_pagination_container}>
          <div className={styles.table_info_actual_page}>
            <p>Showing page { actualPage } of { Math.floor(dataLength/6) }</p>
          </div>
          <div className={styles.pagination_info}>
            <div onClick={(e)=>{
              if ( auxCommitsInformationData!.length===0 ){
                setActualPage(actualPage=>actualPage > 1 ? actualPage - 1 : actualPage );
              }else{
                setActualPage(actualPage=>actualPage > 1 ? actualPage - 1 : actualPage);
              }
              handleGetMoreRepoData();
            }} className={[styles.left_icon_container , "pointer"].join(" ")}>
              <AiFillCaretLeft/>
            </div>
            <div className={styles.page_container}>

            {
              new Array(Math.ceil(auxCommitsInformationData!.length===0 ? dataLength/6 : auxDataLength/6)).fill("").map((arr,index)=>{

                return <p onClick={(e)=>{
                  e.preventDefault();
                  setActualPage(index+1);
                  console.log({actualPage});
                  if(actualPage !==index+1){
                    // handleGetMoreRepoData();
                  }
                }}
                key={nanoid()}
                className={[ actualPage ===index+1 ?  styles.label_actual_page : styles.label_page , "hover"].join(" ")}
                >
                  {index+1}
                </p> 
              })
            }
            </div>
            <div onClick={(e)=>{
              if ( auxCommitsInformationData!.length===0 ){
                setActualPage(actualPage=>actualPage < Math.floor(dataLength/6) ? actualPage + 1 : actualPage );
              }else{
                setActualPage(actualPage=>actualPage < Math.floor(auxDataLength/6) ? actualPage + 1 : actualPage);
              }
              
            
            }} className={[styles.rigth_icon_container, "pointer"].join(" ")}>
              <AiFillCaretRight/>

            </div>
          </div>
        </div>
      
      
      </main>

      <Footer/>
    </div>
  )
}
