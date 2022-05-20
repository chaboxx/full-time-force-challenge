import { FC } from "react";
import { FiGithub } from "react-icons/fi";

export const Navbar : FC = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_content_container">
          <h1 className="navbar_title">GIT COMMITS APP</h1>
          <FiGithub className="navbar_icon"/>
      </div>
    </nav>
  )
}
