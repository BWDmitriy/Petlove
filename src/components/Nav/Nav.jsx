// src/components/Nav.jsx
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/news" activeClassName="active">
        News
      </NavLink>
      <NavLink to="/notices" activeClassName="active">
        Notices
      </NavLink>
      <NavLink to="/friends" activeClassName="active">
        Our Friends
      </NavLink>
    </nav>
  );
};

export default Nav;
