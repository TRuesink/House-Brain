import { getUser } from "@/api/auth";
import { redirect } from "next/navigation";
import { type AxiosError } from "axios";
import LogoutButton from "./LogoutButton";

export default async function Home() {
  try {
    await getUser();
  } catch (error: AxiosError) {
    if (error.response.status === 401) {
      redirect("/login");
    }
  }
  return (
    <div>
      Home
      <LogoutButton />
    </div>
  );
}
