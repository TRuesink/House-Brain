"use client";

import * as React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "@/app/components/SubmitButton";
import Link from "next/link";
import { registerUser } from "@/actions/auth";
import Input from "@/app/components/Input";

const initialErrors: { errors: { [key: string]: string[] } } = {
  errors: {},
};

function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialErrors);
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <svg
          className="w-8 h-8 text-primary-700 dark:text-white mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
          />
        </svg>
        House Brain
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" action={formAction}>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name*"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                required
                error={"firstName" in state.errors}
                helperText={state?.errors?.firstName?.join(" ")}
              />
              <Input
                label="Last Name*"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="John"
                required
                error={"lastName" in state.errors}
                helperText={state?.errors?.lastName?.join(" ")}
              />
            </div>
            <Input
              label="Email*"
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              required
              error={"email" in state.errors}
              helperText={state?.errors?.email?.join(" ")}
            />
            <Input
              label="Password*"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
              error={"password" in state.errors}
              helperText={state?.errors?.password?.join(" ")}
            />
            <SubmitButton variant="contained" fullWidth>
              Create an account
            </SubmitButton>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
