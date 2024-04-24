"use client";

import { logout } from "@/actions/auth";
import React from "react";

const LogoutButton = () => {
  const handleClick = async () => {
    await logout();
  };
  return (
    <button color="inherit" onClick={handleClick}>
      Logout
    </button>
  );
};

export default LogoutButton;
