"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flexBetween max-container padding-container py-5 z-30">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="HiLink" width={74} height={29} />
      </Link>

      <ul
        className={`
    absolute text-white lg:text-gray-50 text-center h-fit py-[20px] rounded-lg px-16 w-[70%] top-[100%] mx-auto left-[50%] translate-x-[-50%] max-lg:bg-gradient-to-r from-green-50 to-blue-70 
    lg:relative lg:flex lg:h-full lg:gap-12 lg:transition-all
        ${isOpen ? "max-lg:opacity-1 block" : "max-lg:opacity-0 hidden"}
`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=" regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex hidden">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        className="lg:hidden inline-block cursor-pointer "
        src={`/menu.svg`}
        alt="menu"
        width={32}
        height={32}
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </nav>
  );
};

export default Navbar;
