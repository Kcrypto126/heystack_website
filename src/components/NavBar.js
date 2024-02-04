import Image from "next/image";
import Link from "next/link";
import React from "react";

import { navLinks } from "@/constants/navlinks";
function NavBar() {
  return (
    <nav className="relative top-0 z-50 hidden w-full mx-auto lg:block max-w-7xl">
      <div className="flex items-center gap-10 px-6 py-4">
        <div className="flex items-center justify-center gap-2 mr-auto">
          <Image src={"/logo.png"} width={"28"} height="28" alt="logo" />
          <p className="text-[1.3rem] font-bold text-[#415082]">Heystack</p>
        </div>
        <div className="flex gap-10 text-[1rem]">
          {navLinks.map((item, ind) => (
            <div key={item.name} className="hover:text-gray-700">
              <Link href={item.links}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="bg-[#4150821C] px-4 rounded-md py-1 border-[#415082] border-[1.5px]">
          <button className="text-[#415082] font-semibold ">
            SEE LIVE IN ACTION
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
