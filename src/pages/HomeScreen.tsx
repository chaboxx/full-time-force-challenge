import { FC , useState } from 'react';
import { nanoid } from 'nanoid';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { TableInfo } from '../components/homeScreen/TableInfo';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { Loading } from '../components/ui/Loading';

import { usePagination } from '../hooks/usePagination';

import styles from "../styles/pages/HomeScreen.module.css";

export const HomeScreen : FC = () => {
  
  const { 
    checking, 
    commitsInformationData,
    currentPage, 
    numberOfPages,
    changeCurrentPage,
    handleDataCommitDefault,
    handleFormDataCommitOther,
    
  } = usePagination();

  const [ urlRepo, setUrlRepo ] = useState("");
  

  if (checking){
    return <Loading show={checking}/>;
  }

  return (
    <div className={styles.home_screen_container}>
      <Navbar/>
      <main className={styles.home_screen_content_container}>
        <div className={styles.home_screen_buttons_container}>
          <div className={styles.home_screen_button_default_container}>

            <button onClick={handleDataCommitDefault} className={[styles.home_screen_button_default, "hover"].join(" ")}>Default {"(This Proyect)"}</button>
          </div>
          <div style={{flex:"1"}}></div>
          <form onSubmit={(e)=>handleFormDataCommitOther(e,urlRepo)} className={styles.home_screen_search_container}>
            <input value={urlRepo} onChange={(e)=>setUrlRepo(e.target.value)} className={styles.home_screen_input_search} placeholder="Search..." type="text"/>
            <button type="submit" className={[styles.home_screen_search_button , "hover"].join(" ")}>Search Commits by Url</button>
          </form>
        </div>

        
        <TableInfo data={ commitsInformationData } />
        
        <div className={styles.table_info_pagination_container}>
          <div className={styles.table_info_actual_page}>
            <p>Showing page { currentPage } of { numberOfPages }</p>
          </div>
          <div className={styles.pagination_info}>
            <div 
              onClick={(e)=>changeCurrentPage("subtract")}
              className={[styles.left_icon_container , "pointer"].join(" ")}
            >
              <AiFillCaretLeft/>
            </div>
            <div className={styles.page_container}>

            {
              new Array(numberOfPages).fill("").map((_,index)=>(
                <p 
                  onClick={(e)=>changeCurrentPage("value",index+1)}
                  key={nanoid()}
                  className={[ currentPage ===index+1 ?  styles.label_actual_page : styles.label_page , "hover"].join(" ")}
                >
                  {index+1}
                </p>
              ))
            }
            </div>
            <div 
              onClick={(e)=>changeCurrentPage("add")}
              className={[styles.rigth_icon_container, "pointer"].join(" ")}
            >
              <AiFillCaretRight/>
            </div>
          </div>
        </div>
      
      
      </main>

      <Footer/>
    </div>
  )
}
