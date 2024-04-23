"use client";

import { logout } from "@/api/auth";
import { Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const LogoutButton = () => {
  const handleClick = async () => {
    await logout();
  };
  return (
    <IconButton color="inherit" onClick={handleClick}>
      <Logout />
    </IconButton>
  );
};

export default LogoutButton;
