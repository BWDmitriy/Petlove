// src/components/AuthNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

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
