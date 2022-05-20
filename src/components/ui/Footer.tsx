import { FC } from 'react';


import styles from "../../styles/components/ui/Footer.module.css";
export const Footer : FC = () => {
  return (
    <footer className={styles.footer_container}>
      <p className={styles.footer_title}>Home Test Full Time Force</p>
      <p className={styles.page_owner}>@chaboxxsama</p>
    </footer>
  )
}
