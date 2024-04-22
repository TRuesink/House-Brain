"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { SERVER_URL } from "@/constants";

export const getUser = async () => {
  const session = cookies().get("house_brain_session");
  if (!session) throw new Error("Not Authenticated");
  try {
    const userData = await axios.get(`${SERVER_URL}/user`, {
      headers: {
        Authorization: `Bearer ${session.value}`,
      },
    });
    return userData.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${SERVER_URL}/user/login`, {
      email,
      password,
    });
    console.log(response.data);
    const { token } = response.data;
    if (!token) throw new Error("Not Authenticated");
    cookies().set("house_brain_session", token);
  } catch (error) {
    console.error(error);
    throw error;
  }
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
    console.error(error);
    throw error;
  }
};
