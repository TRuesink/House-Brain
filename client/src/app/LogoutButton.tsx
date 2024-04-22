"use client";

import { logout } from "@/api/auth";
import React from "react";

const LogoutButton = () => {
  const handleClick = async () => {
    await logout();
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default LogoutButton;
