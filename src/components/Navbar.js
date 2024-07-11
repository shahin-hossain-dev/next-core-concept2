"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession(); // auth er jonno je credentials gulo add kora hoy segulo useSession hook er moddhe pawa jay. session egulo cookies er token er moddho theke niye ashe.

  console.log(session);
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

  const handler = () => {
    router.push("/api/auth/signin");
  };

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
      <div className="flex gap-3 flex-row-reverse items-center">
        {/* <Link href={"/api/auth/signin"}>Sign in</Link> */}
        <div>
          {session.status === "unauthenticated" ? (
            <button onClick={handler}>Sign In</button>
          ) : (
            <button onClick={() => signOut()} className="bg-white px-3 py-2 ">
              Sign Out
            </button>
          )}
        </div>
        <div className="flex gap-3">
          <div>
            <p>{session?.data?.user?.name}</p>
            {/* <p>{session?.data?.user?.email}</p> */}
            <p>{session?.data?.user?.type}</p>
          </div>
          <Image
            src={session?.data?.user?.image}
            height={150}
            width={150}
            alt={session?.data?.user?.name}
            className="h-[50px] w-[50px] rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
