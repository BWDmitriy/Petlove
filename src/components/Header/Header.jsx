// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import AuthNav from "./AuthNav";
import UserNav from "./UserNav";

const Header = ({ isAuthenticated }) => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/path/to/logo.svg" alt="Logo" />
      </Link>
      <Nav />
      {isAuthenticated ? <UserNav /> : <AuthNav />}
    </header>
  );
};

export default Header;