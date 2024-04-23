"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link as MuiLink } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFormState } from "react-dom";
import { loginUser } from "@/api/auth";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link href="/" passHref legacyBehavior>
        <MuiLink color="inherit" href="https://mui.com/">
          Your Website
        </MuiLink>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const initialErrors: { errors: { [key: string]: string[] } } = {
  errors: {},
};

function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialErrors);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" action={formAction} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={"email" in state.errors}
            helperText={
              state.errors.email ? state.errors.email.join(",") : null
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={"password" in state.errors}
            helperText={
              state.errors.password ? state.errors.password.join(",") : null
            }
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </SubmitButton>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpassword" passHref legacyBehavior>
                <MuiLink href="#" variant="body2">
                  Forgot password?
                </MuiLink>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" passHref legacyBehavior>
                <MuiLink href="#" variant="body2">
                  {"Don't have an account? Register"}
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default LoginForm;
