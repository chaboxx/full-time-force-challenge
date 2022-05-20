import { FC } from "react";
import { FiGithub } from "react-icons/fi";

import styles from "../../styles/components/ui/Navbar.module.css";

export const Navbar : FC = () => {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar_content_container}>
          <h1 className={styles.navbar_title}>GIT COMMITS APP</h1>
          <FiGithub className={styles.navbar_icon}/>
      </div>
    </nav>
  )
}
