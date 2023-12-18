import Image from "next/image";
import Link from "next/link";
import React from "react";

import { navLinks } from "@/constants/navlinks";
function NavBar() {
  return (
    <nav className="w-full lg:block hidden">
      <div className="flex px-6 py-4 gap-10 items-center">
        <div className="mr-auto flex gap-2 items-center justify-center">
          <Image src={"/logo.png"} width={"28"} height="28" alt="logo" />
          <p className="text-[1.3rem] font-bold text-[#415082]">Heystack</p>
        </div>
        <div className="flex gap-10 text-[1rem] font-[500]">
          {navLinks.map((item, ind) => (
            <div key={item.name} className="hover:text-gray-700">
              <Link href={item.links}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="bg-[#4150821C] px-2 py-1 rounded-md border-[#415082] border-[1.5px]">
          <button className="text-[#415082] font-semibold ">
            SEE LIVE IN ACTION
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
