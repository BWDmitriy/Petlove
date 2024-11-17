// src/components/Nav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

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
