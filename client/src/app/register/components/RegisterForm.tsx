"use client";

import * as React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { registerUser } from "@/actions/auth";

const initialErrors: { errors: { [key: string]: string[] } } = {
  errors: {},
};

function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialErrors);
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
        <div>Sign up</div>
        <form action={formAction} noValidate style={{ marginTop: 3 }}>
          <div>
            <div>
              <input name="firstName" required id="firstName" autoFocus />
            </div>
            <div>
              <input required id="lastName" name="lastName" />
            </div>
            <div>
              <input required id="email" name="email" />
            </div>
            <div>
              <input required name="password" type="password" id="password" />
            </div>
          </div>
          <SubmitButton>Sign Up</SubmitButton>
          <div>
            <div>
              <Link href="/login">Already have an account? Sign in</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
