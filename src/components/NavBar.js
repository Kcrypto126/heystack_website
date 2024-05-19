"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants/navlinks";
import Modal from "./Modal";
function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav
        className={`hidden z-50 relative mx-auto lg:block max-w-7xl transition`}
      >
        <div className="flex items-center justify-between gap-10  py-5">
          <Link href="/">
            <div className="flex items-center justify-center gap-2 mr-auto">
              <Image src={"/logo.png"} width={"28"} height="28" alt="logo" />
              <p className="text-xl font-bold text-[#415082] tracking-wider">
                Heystack
              </p>
            </div>
          </Link>
          <div className="flex gap-6 px-10 font-medium text-gray-900">
            {navLinks.map((item, ind) => (
              <Link
                href={
                  item.name === "Home"
                    ? "/"
                    : item.name === "Blogs"
                    ? "/blogs"
                    : `#${item.name.toLowerCase()}`
                }
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-6 py-2 rounded-md bg-[#415082] bg-opacity-10 border-2 border-[#415082]">
            <button
              className="capitalize text-[#415082] font-semibold text-[14px]"
              onClick={toggleOpen}
            >
              SEE LIVE IN ACTION
            </button>
          </div>
        </div>
        <Modal open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
}

export default NavBar;
