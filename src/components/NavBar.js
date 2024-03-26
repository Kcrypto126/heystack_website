"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { navLinks } from "@/constants/navlinks";
import { white } from "tailwindcss/colors";
function NavBar() {
  const [clientHieght, setClientHieght] = useState(false);

  useEffect(() => {
    // Function to update navbar color based on scroll height
    const updateNavbarColor = () => {
      if (window.scrollY > 50) {
        setClientHieght(true); // Change color if scroll height exceeds 75 pixels
      } else {
        setClientHieght(false); // Default color
      }
    };

    // Attach event listener to window scroll event
    window.addEventListener("scroll", updateNavbarColor);
  }, []);
  return (
    <nav
      className={`fixed top-0 z-[100] hidden w-full mx-auto lg:block max-w-7xl transition ${
        clientHieght ? "bg-white border-b" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-10 px-6 py-6 ">
        <div className="flex items-center justify-center gap-2 mr-auto">
          <Image src={"/logo.png"} width={"28"} height="28" alt="logo" />
          <p className="text-xl font-bold text-[#415082] tracking-wider">
            Heystack
          </p>
        </div>
        <div className="flex gap-6 px-10 font-medium text-gray-900">
          {navLinks.map((item, ind) => (
            <div key={item.name} className="hover:text-gray-700">
              <Link href={item.links}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="bg-primary px-6 py-2 rounded-full  bg-[#415082] border">
          <button className="text-white ">SEE LIVE IN ACTION</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
