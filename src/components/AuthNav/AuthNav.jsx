// src/components/AuthNav.jsx
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" activeClassName="active">
        Register
      </NavLink>
      <NavLink to="/login" activeClassName="active">
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
