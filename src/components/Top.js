"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";
import { motion } from "framer";

function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed sm:right-10 sm:bottom-10 bottom-5 right-5 z-50 ">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, duration: 0.5 }}
          onClick={scrollToTop}
          className="flex flex-col items-center gap-2 group"
        >
          <IoMdArrowUp
            size={32}
            className=" shadow border bg-white rounded-full p-1 text-[#1943CC] group-hover:shadow-lg transition-all"
          />
          <p className="text-sm font-medium text-gray-800 sm:block hidden">
            Back to Top
          </p>
        </motion.button>
      )}
    </div>
  );
}

export default Top;
