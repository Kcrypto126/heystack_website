import Image from "next/image";
import React from "react";
import Container from "./Container";
import Link from "next/link";

function Tab() {
  return (
    <Container>
      <div className="flex justify-center w-full">
        <div className="relative w-[90%]">
          <div className="relative z-40 flex flex-col justify-center w-full px-6 py-6 overflow-hidden bg-white tab-box lg:px-10 lg:py-6">
            <h1 className="my-2 lg:text-5xl md:text-4xl lg:mx-40 ">
              Actionable insights for smarter decisions
            </h1>
            <p className="text-sm md:text-xl md:mt-4 text-[0.8rem] mt-2 text-left px-2">
              Heystack is the most comprehensive analytics solution for
              aggregating and analyzing customer reviews at scale. Heystack
              aggregates millions of customer reviews across Amazon, Walmart,
              Target, and 100’s of other retailer websites in a{" "}
            </p>
            <div className="mt-6 text-center">
              <Link href="https://hey-stack.com/login.html" target="_blank">
                <button className="px-6 py-1 transition btn hover:opacity-80">
                  Live Demo
                </button>
              </Link>
              <div className="z-10 absolute right-[-2%] bottom-[-9%]">
                <Image
                  src={"/circle.svg"}
                  height="100"
                  width="100"
                  alt="pattern"
                />
              </div>
            </div>
          </div>
          <div className="w-[102%] h-full absolute z-30 top-0 bg-tab-box"></div>
        </div>
      </div>
    </Container>
  );
}

export default Tab;
