import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Import the CSS module
import Menu from "../Menu/Menu"; // Import the Menu component
import sprite from "../../assets/icons.svg";

const Header = ({ isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/src/assets/logo-black.svg" alt="Logo" />
      </Link>
      <svg className={styles.burgerIcon} onClick={toggleMenu}>
        <use xlinkHref={`${sprite}#icon-menu`} />
      </svg>
      {menuOpen && <Menu isAuthenticated={isAuthenticated} />}
    </header>
  );
};

export default Header;
