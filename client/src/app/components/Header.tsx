import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { IconButton } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/api/auth";
import Link from "next/link";

async function Header() {
  let data: {
    authenticated: boolean;
    user: null | {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
  try {
    data = await getUser();
  } catch (error) {
    throw error;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: "flex", mr: 1 }} />
          <Link href="/" passHref legacyBehavior>
            <Typography
              variant="h6"
              component="a"
              noWrap
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Link>

          {data.authenticated ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton color="inherit">
                  <Dashboard />
                </IconButton>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Dashboard
                </Button>
              </Box>
            </>
          ) : (
            <Box sx={{ flexGrow: 1 }} />
          )}

          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            {data.authenticated ? (
              <>
                <Typography>Hi {data.user?.firstName}!</Typography>
                <LogoutButton />
              </>
            ) : (
              <Link href="/login">
                <Button sx={{ color: "white" }}>Sign In</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
