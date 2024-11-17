// src/components/UserBar.jsx
import React from "react";
import { Link } from "react-router-dom";

const UserBar = ({ user }) => {
  return (
    <div className="user-bar">
      <Link to="/profile">
        <img
          src={user.avatar || "/path/to/default-avatar.png"}
          alt="User Avatar"
        />
        <span>{user.name}</span>
      </Link>
    </div>
  );
};

export default UserBar;
