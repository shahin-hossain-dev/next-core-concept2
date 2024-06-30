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
      title: "Meals",
      path: "/meals",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
  ];

  return (
    <nav className="py-5 bg-slate-400 px-5 font-bold flex justify-between">
      <h2 className="text-3xl text-white">Next Core</h2>
      <ul className="flex gap-3">
        {links?.map((link, idx) => (
          <li key={idx}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/api/auth/signin"}>Sign in</Link>
    </nav>
  );
};

export default Navbar;
