import { FC } from 'react';

import { AiFillCaretLeft ,AiFillCaretRight } from "react-icons/ai";

import { GetCommitData, GitHubCommit } from '../../interfaces/github-response';

import styles from "../../styles/components/homeScreen/TableInfo.module.css";



interface Props{
  data : GitHubCommit[],
}

export const TableInfo : FC<Props> = ({ data : commitsInformation}) => {
  return (
    <>
      <table className={styles.table_info_table}>
        <thead className={styles.table_info_thead}>
          <tr className={styles.table_info_tr_head}>

            <th className={styles.table_info_th_15}>Commit Id</th>
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
                <td className={styles.table_info_td_15}>#{commit.committer.id}</td>
                <td className={styles.table_info_td_15}>{commit.commit.message}</td>
                <td className={styles.table_info_td_20}>{commit.commit.committer.email}</td>
                <td className={styles.table_info_td_15}>{new Date(commit.commit.committer.date).toString()}</td>
                <td className={styles.table_info_td_10}>{commit.author.url}</td>
              </tr>
            ))
          }
  
        </tbody>
          
          
      </table>
      <div className={styles.table_info_pagination_container}>
        <div className={styles.table_info_actual_page}>
          <p>Showing page 1 of 2</p>
        </div>
        <div className={styles.pagination_info}>
          <div className={styles.left_icon_container}>
            <AiFillCaretLeft/>
          </div>
          {

          }

          <div className={styles.page_container}>

            <p className={styles.label_actual_page}>
              1 
            </p> 
            
            <p className={styles.label_page}>
              1 
            </p>
          </div>
          
          <div className={styles.rigth_icon_container}>
            <AiFillCaretRight/>

          </div>
        </div>
      </div>
    </>
  )
}
