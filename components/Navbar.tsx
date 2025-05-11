"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToggle } from "./ToggleContext";

const user = {};

const Navbar = () => {
  const { isToggled, toggle } = useToggle();
  const router = useRouter();
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Watcher</h1>
        </Link>

        <button
          onClick={toggle}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300
    ${isToggled ? "bg-gray-800 text-white" : "bg-yellow-50 text-yellow-900"}
  `}
        >
          <span>{isToggled ? "🌙" : "☀️"}</span>
        </button>

        {user && (
          <figure>
            <button onClick={() => router.push("/profile/123")}>
              <Image
                src="/hall/ana/ana-7.png"
                alt="pfp"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="pfp"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
