import { FC } from "react";
import { FiGithub } from "react-icons/fi";

export const Navbar : FC = () => {
  return (
    <nav>
      <div>
          <h1>GIT COMMITS APP</h1>
          <FiGithub/>
      </div>
    </nav>
  )
}
