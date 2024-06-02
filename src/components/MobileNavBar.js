"use client";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { navLinks } from "@/constants/navlinks";
import Modal from "./Modal";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed top-0 left-0 w-full">
      <Popover className="bg-[#e4ecff]">
        <div className="px-2 py-3 lg:hidden flex justify-between w-full">
          <div className="mr-auto flex gap-2 items-center justify-center">
            <Image src={"/logo.png"} width={"28"} height="28" alt="logo" />
            <p className="text-[1.3rem] font-bold text-[#415082]">Heystack</p>
          </div>
          <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span className="absolute -inset-0.5" />
            <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
          </Popover.Button>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="z-10 absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
          >
            <div id="overlay"></div>
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="mr-auto flex gap-2 items-center justify-center">
                    <Image
                      src={"/logo.png"}
                      width={"28"}
                      height="28"
                      alt="logo"
                    />
                    <p className="text-[1.3rem] font-bold text-[#415082]">
                      Heystack
                    </p>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="absolute -inset-0.5" />
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-1 gap-4  text-[1rem] font-[500]">
                  {navLinks.map((item, ind) => (
                    <div key={item.name}>
                      <Link
                        href={
                          item.name === "Home"
                            ? "/"
                            : item.name === "Blogs"
                            ? "/blogs"
                            : `#${item.name.toLowerCase()}`
                        }
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  <div className="bg-[#4150821C] px-4 py-2 rounded-md border-[#415082] border-[1.5px] text-center mt-10">
                    <button
                      className="text-[#415082] font-semibold "
                      onClick={toggleOpen}
                    >
                      SEE LIVE IN ACTION
                    </button>
                  </div>
                </div>
              </div>
              <Modal open={open} setOpen={setOpen} />
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;
