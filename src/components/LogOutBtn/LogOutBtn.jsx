// src/components/LogOutBtn.jsx
import React from "react";

const LogOutBtn = ({ onLogout }) => {
  return <button onClick={onLogout}>Log Out</button>;
};

export default LogOutBtn;
