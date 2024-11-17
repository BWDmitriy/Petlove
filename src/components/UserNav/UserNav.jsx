// src/components/UserNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import UserBar from "./UserBar";
import LogOutBtn from "./LogOutBtn";

const UserNav = () => {
  return (
    <div>
      <UserBar />
      <LogOutBtn />
    </div>
  );
};

export default UserNav;
