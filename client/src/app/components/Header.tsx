import React from "react";
import { getUser } from "@/actions/auth";
import Link from "next/link";
import Buttonlink from "./ButtonLink";

async function Header() {
  const data = await getUser();
  console.log(data);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              House Brain
            </span>
          </Link>
          <div className="flex gap-1">
            <Buttonlink href="/login" variant="outlined">
              Log In
            </Buttonlink>
            <Buttonlink href="/register" variant="contained">
              Register
            </Buttonlink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
