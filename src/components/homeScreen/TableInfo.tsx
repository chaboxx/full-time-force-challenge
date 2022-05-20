import { FC } from 'react';

import { nanoid } from 'nanoid';

import { AiFillCaretLeft ,AiFillCaretRight } from "react-icons/ai";



import styles from "../../styles/components/homeScreen/TableInfo.module.css";

import { GitHubCommit } from '../../interfaces/github-response';

interface Props{
  data : GitHubCommit[],
  dataLength : number;
  actualPage : number;
}

export const TableInfo : FC<Props> = ({ data : commitsInformation , dataLength , actualPage}) => {
  return (
    <>
      <table className={styles.table_info_table}>
        <thead className={styles.table_info_thead}>
          <tr className={styles.table_info_tr_head}>

            <th className={styles.table_info_th_15}>Commit URL</th>
            <th className={styles.table_info_th_15}>Commit Message</th>
            <th className={styles.table_info_th_20}>Email Commiter</th>
            <th className={styles.table_info_th_15}>Date</th>
            <th className={styles.table_info_th_10}>Owner</th>
          </tr>
        </thead>
        
        <tbody>
          {
            commitsInformation.map(commit=>(
              <tr className={styles.table_info_tr_body}>
                <td className={styles.table_info_td_15}>
                  <div className={styles.table_td_container}>

                    <a href="" onClick={(e)=>{
                      e.preventDefault();
                      window.open(commit.html_url);
                    }}>Commit GitHub URL</a>
                  </div>
                </td>
                <td className={styles.table_info_td_15}>
                  <p className={styles.table_td_container}>{ commit.commit.message.length >32 ? `${commit.commit.message.substring(0,32)}....` : commit.commit.message}</p>
                </td>
                <td className={styles.table_info_td_20_email_commiter}>
                  <div className={styles.email_commiter_container}>

                    <img className={styles.image_commiter} src={commit.committer.avatar_url}/>
                    <a className={styles.email_anchor} href="" onClick={(e)=>{
                      e.preventDefault();
                      window.open(commit.committer.html_url);
                    }}>
                      {commit.commit.committer.email}
                    </a>
                  </div>
                </td>
                <td className={styles.table_info_td_15_date}>
                  <p>{new Date(commit.commit.committer.date).toUTCString()}</p>
                </td>
                <td className={styles.table_info_td_10}>
                  <div className={styles.table_td_container}>

                    <a href="" onClick={(e)=>{
                      e.preventDefault();
                      window.open(commit.author.html_url);
                    }}
                    >Owner GitHub
                    </a>
                  </div>
                </td>
              </tr>
            ))
          }
  
        </tbody>
          
          
      </table>
      
    </>
  )
}
