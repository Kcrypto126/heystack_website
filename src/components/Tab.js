import React from "react";
import Link from "next/link";

function Tab() {
  return (
    <div className="flex justify-center w-full max-w-7xl lg:mx-auto  lg:-translate-y-4 mt-20 lg:mt-0 mb-2">
      <div className="relative w-[90%]">
        <div className="relative z-40 flex flex-col justify-center w-full   overflow-hidden  tab-box lg:px-10 ">
          <h1 className="my-2 lg:text-4xl md:text-3xl text-xl lg:mx-20">
            Generative AI Powered Actionable Insights for Product Experience
            Analytics
          </h1>
          <p className="  md:mt-4 lg:text-[1rem] md:text-[16px] text-[14px] mt-2 text-center lg:text-left ">
            Uncover actionable insights from millions of customer reviews across
            hundreds of retailers to minimize returns, drive product innovation,
            identify market gaps, and gain a competitive advantage.
          </p>
          <div className="mt-6 text-center">
            <Link
              href="https://calendly.com/sharadkraj/heystack-demo"
              target="_blank"
            >
              <button className="lg:px-6 px-4 text-xs md:text-sm py-1 transition btn hover:opacity-80">
                Live Demo
              </button>
            </Link>
            {/* <div className="z-10 absolute right-[-2%] bottom-[-9%]">
              <Image
                src={"/circle.svg"}
                height="100"
                width="100"
                alt="pattern"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
