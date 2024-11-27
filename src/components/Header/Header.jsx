import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Import the CSS module
import Menu from "../Menu/Menu"; // Import the Menu component

const Header = ({ isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/src/assets/logo.svg" alt="Logo" />
      </Link>
      <svg className={styles.burgerIcon} onClick={toggleMenu}>
        <use xlinkHref="/src/assets/icons.svg#icon-menu" />
      </svg>
      {menuOpen && <Menu isAuthenticated={isAuthenticated} />}
    </header>
  );
};

export default Header;
