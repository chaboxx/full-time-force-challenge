import { url } from 'inspector';
import { FC, useEffect, useState } from 'react';
import { TableInfo } from '../components/homeScreen/TableInfo';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';
import { useApi } from '../hooks/useApi';
import { GetCommitData, GitHubCommit } from '../interfaces/github-response';

// import { Link } from 'react-router-dom';


import styles from "../styles/pages/HomeScreen.module.css";

export const HomeScreen : FC = () => {

  const [commitsInformationData, setCommitsInformationData] = useState<GitHubCommit[]>();
  
  const { getCommitData } = useApi();
  
  const [checking, setChecking] = useState(true);
  
  useEffect(() => {
    getCommitData().then(data=>{
      if ( !data ){
        alert("Error in the api , reload the page please.");
        return;
      }
      setCommitsInformationData(data.data);
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

            <button className={styles.home_screen_button_default}>Default {"(This Proyect)"}</button>
          </div>
          <div style={{flex:"1"}}></div>
          <div className={styles.home_screen_search_container}>
            <input className={styles.home_screen_input_search} placeholder="Search..." type="text"/>
            <button className={styles.home_screen_search_button}>Search Commits by Url</button>
          </div>
        </div>

        
        <TableInfo data={commitsInformationData!}/>

      </main>

      <Footer/>
    </div>
  )
}
