import { getUser } from "@/api/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { type AxiosError } from "axios";

export default async function Home() {
  try {
    await getUser(cookies().getAll());
  } catch (error: AxiosError) {
    if (error.response.status === 401) {
      redirect("/login");
    }
  }
  return <div>Home</div>;
}
