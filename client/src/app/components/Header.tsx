import React from "react";
import { getUser } from "@/actions/auth";

async function Header() {
  const data = await getUser();
  console.log(data);

  return <div>LOGO</div>;
}

export default Header;
