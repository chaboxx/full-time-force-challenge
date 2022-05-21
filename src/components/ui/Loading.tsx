import { FC } from 'react';

import styles from "../../styles/components/ui/Loading.module.css";

interface Props{
  show : boolean;
}

export const Loading : FC<Props> = ({show}) => {
  

  return (
    <div className={[styles.loading_screen_container, show ? styles.show : styles.hide].join(" ")}>
      

      <p className={styles.loading_label}>Loading...</p>
      
    </div>
  )
}
