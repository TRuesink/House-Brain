"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { Link as MuiLink } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SubmitButton from "@/components/SubmitButton";
import { useFormState } from "react-dom";
import { registerUser } from "@/api/auth";
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
      <Link href="/login" passHref legacyBehavior>
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
function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialErrors);
  return (
    <Container component="main" maxWidth="xs">
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
          Sign up
        </Typography>
        <Box component="form" action={formAction} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={"firstName" in state.errors}
                helperText={
                  state.errors.firstName
                    ? state.errors.firstName.join(",")
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                error={"lastName" in state.errors}
                helperText={
                  state.errors.lastName ? state.errors.lastName.join(",") : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                error={"email" in state.errors}
                helperText={
                  state.errors.email ? state.errors.email.join(",") : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={"password" in state.errors}
                helperText={
                  state.errors.password ? state.errors.password.join(",") : null
                }
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </SubmitButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" passHref legacyBehavior>
                <MuiLink href="#" variant="body2">
                  Already have an account? Sign in
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

export default RegisterForm;
