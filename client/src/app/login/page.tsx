"use client";

import React, { FC } from "react";
import { useFormState } from "react-dom";
import { loginUser } from "@/api/auth";
import { TextField } from "@mui/material";

const initialErrors: { errors: { [key: string]: string[] } } = {
  errors: {},
};

const Login: FC = () => {
  const [state, formAction] = useFormState(loginUser, initialErrors);

  return (
    <div>
      <h2>Login</h2>
      <form action={formAction}>
        <TextField
          id="email"
          name="email"
          label="Email"
          error={"email" in state.errors}
          helperText={state.errors.email ? state.errors.email.join(",") : null}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          error={"password" in state.errors}
          helperText={
            state.errors.password ? state.errors.password.join(",") : null
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
