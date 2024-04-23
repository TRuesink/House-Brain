"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { SERVER_URL } from "@/constants";
import { z } from "zod";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const session = cookies().get("house_brain_session");
  if (!session) {
    return { authenticated: false, user: null };
  }
  try {
    const userData = await axios.get(`${SERVER_URL}/user`, {
      headers: {
        Authorization: `Bearer ${session.value}`,
      },
    });
    return { authenticated: true, user: userData.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return { authenticated: false, user: null };
    } else {
      throw error;
    }
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
    const response = await axios.post(`${SERVER_URL}/user/login`, {
      email: validatedFields.data?.email,
      password: validatedFields.data?.password,
    });
    const { token } = response.data;
    if (!token) throw new Error("Not Authenticated");
    cookies().set("house_brain_session", token);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return {
        errors: {
          email: ["Invalid credentials"],
          password: ["Invalid credentials"],
        },
      };
    } else {
      throw error;
    }
  }
  redirect("/app");
};

export const logout = async () => {
  try {
    const session = cookies().get("house_brain_session");
    console.log(session);
    if (!session) throw new Error("Not Authenticated");
    await axios.post(
      `${SERVER_URL}/user/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session.value}`,
        },
      }
    );
    cookies().delete("house_brain_session");
  } catch (error) {
    throw error;
  }
  redirect("/login");
};
