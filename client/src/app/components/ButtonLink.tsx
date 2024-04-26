import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface ButtonLinkProps {
  href: string;
  variant: "contained" | "outlined";
}

const Buttonlink: FC<PropsWithChildren<ButtonLinkProps>> = ({
  href,
  variant,
  children,
}) => {
  // Common Classes
  const classes: string[] = [
    "font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5",
  ];
  switch (variant) {
    case "outlined":
      // Text Color
      classes.push("text-gray-800 dark:text-white");
      // Hover
      classes.push("hover:bg-gray-50 dark:hover:bg-gray-700");
      // Focus
      classes.push(
        "focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-800"
      );
      break;
    case "contained":
      // Text Color
      classes.push("text-white");
      // Hover
      classes.push("hover:bg-primary-800 dark:hover:bg-primary-700");
      // Focus
      classes.push(
        "focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
      );
      // Background
      classes.push("bg-primary-700 dark:bg-primary-600");
      break;
    default:
      break;
  }
  return (
    <Link href={href} className={classes.join(" ")}>
      {children}
    </Link>
  );
};

export default Buttonlink;
