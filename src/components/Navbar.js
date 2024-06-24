"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  return (
    <nav className="py-5 bg-slate-400 px-5 font-bold">
      <ul className="flex gap-3">
        {links?.map((link, idx) => (
          <li key={idx}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
