"use server";

import { cookies } from "next/headers";
import { SERVER_URL } from "@/constants";
import { z } from "zod";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const session = cookies().get("house_brain_session");
  if (!session) {
    return { authenticated: false, user: null };
  }
  try {
    const response: Response = await fetch(`${SERVER_URL}/user`, {
      headers: {
        Authorization: `Bearer ${session.value}`,
      },
    });
    if (response.status === 401) {
      return { authenticated: false, user: null };
    } else if (response.ok) {
      const data = await response.json();
      return { authenticated: true, user: data };
    } else {
      throw new Error("Unable to get user");
    }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (prevState: any, formData: FormData) => {
  try {
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(1),
    });

    const validatedFields = schema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return { errors: validatedFields.error.flatten().fieldErrors };
    }
    const response = await fetch(`${SERVER_URL}/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: validatedFields.data?.email,
        password: validatedFields.data?.password,
      }),
    });
    if (response.status === 401) {
      return {
        errors: {
          email: ["Invalid credentials"],
          password: ["Invalid credentials"],
        },
      };
    } else if (response.ok) {
      const { token } = await response.json();
      if (!token) throw new Error("Not Authenticated");
      cookies().set("house_brain_session", token);
    } else {
      throw new Error("Unable to log in user");
    }
  } catch (error) {
    throw error;
  }
  redirect("/app");
};

export const registerUser = async (prevState: any, formData: FormData) => {
  try {
    const schema = z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      email: z.string().email(),
      password: z.string().min(8),
    });
    const validatedFields = schema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (!validatedFields.success) {
      return { errors: validatedFields.error.flatten().fieldErrors };
    }
    const response = await fetch(`${SERVER_URL}/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: validatedFields.data?.firstName,
        lastName: validatedFields.data?.lastName,
        email: validatedFields.data?.email,
        password: validatedFields.data?.password,
      }),
    });
    if (response.status === 409) {
      return {
        errors: {
          email: ["A user for this email address already exists"],
        },
      };
    } else if (response.ok) {
      const { token } = await response.json();
      if (!token) throw new Error("Not Authenticated");
      cookies().set("house_brain_session", token);
    } else {
      throw new Error("Unable to register user");
    }
  } catch (error) {
    throw error;
  }
  redirect("/app");
};

export const logout = async () => {
  try {
    const session = cookies().get("house_brain_session");
    console.log(session);
    if (!session) throw new Error("Not Authenticated");
    const response = await fetch(`${SERVER_URL}/user/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.value}`,
      },
    });
    if (response.ok) {
      cookies().delete("house_brain_session");
    } else {
      throw new Error("unable to log user out");
    }
  } catch (error) {
    throw error;
  }
  redirect("/login");
};
