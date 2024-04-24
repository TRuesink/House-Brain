"use client";

import React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { loginUser } from "@/actions/auth";

const initialErrors: { errors: { [key: string]: string[] } } = {
  errors: {},
};

function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialErrors);

  return (
    <div>
      <div
        style={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5>Sign in</h5>
        <form action={formAction} noValidate style={{ marginTop: 1 }}>
          <input
            required
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <input
            required
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <SubmitButton>Sign In</SubmitButton>
          <div>
            <div>
              <Link href="/forgotpassword">Forgot password?</Link>
            </div>
            <div>
              <Link href="/register">{"Don't have an account? Register"}</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
