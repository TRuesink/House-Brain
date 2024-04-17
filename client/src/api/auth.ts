import { SERVER_URL } from "@/constants";
import axios from "axios";

export const getUser = async (cookies: { name: string; value: string }[]) => {
  console.log("getUser");
  try {
    const clientCookies = cookies
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");
    const userData = await axios.get(`${SERVER_URL}/user`, {
      headers: {
        Cookie: clientCookies,
      },
    });
    return userData.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userData = await axios.post(`/api/user/login`, {
      email,
      password,
    });
    return userData.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
