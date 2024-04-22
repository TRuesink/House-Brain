"use client";

import { logout } from "@/api/auth";
import { Button } from "@mui/material";
import React from "react";

const LogoutButton = () => {
  const handleClick = async () => {
    await logout();
  };
  return <Button onClick={handleClick}>Logout</Button>;
};

export default LogoutButton;
