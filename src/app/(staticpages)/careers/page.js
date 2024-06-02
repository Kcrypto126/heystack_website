"use client";

import Heading from "@/components/Heading";
import { careers } from "@/constants/careers";
import React, { useState } from "react";
import Image from "next/image";
import JobModal from "@/components/JobModal";

const Page = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="bg-gradient-to-b from-[#E4ECFF]  to-white h-full ">
      <div className="lg:max-w-7xl lg:mx-auto md:mx-8 mx-4 pt-5 ">
        <div className="py-10 px-10 bg-white rounded-md ">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-[#5200FF]  to-[#FF2DF7] py-3">
            Who are we ?
          </h2>
          <h5>
            We are the market leader in deriving actionable insights from
            customer reviews. This is not what we say; this is what our
            customers say about us! We are an inclusive team of diverse
            individuals, all driven by a single goal to &ldquo;provide our
            customers the best and nothing but the best&ldquo;.
          </h5>
          <h5 className="mt-4">
            We focus more on your passion and work ethic than your resume. If
            you are a person who believes in &ldquo;getting things done&ldquo;,
            we welcome you. Come join us! You can work remote, have flexible
            hours, enjoy ownership and independence.
          </h5>
        </div>
      </div>

      <div className="lg:max-w-7xl lg:mx-auto md:mx-8 mx-4">
        <Heading>Open Positions</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 lg:mx-10 md:mx-8 mx-4 lg:my-10 ">
          {careers.map((career, ind) => (
            <div
              className="bg-white rounded-md shadow-sm border border-slate-200"
              key={ind + "carrer"}
            >
              <Image
                src={career.image}
                alt="career"
                className="p-2 rounded-sm bg-gray-200"
                height={400}
                width={400}
              />
              <div className="px-4 pt-2 pb-8 flex flex-col items-start">
                <h3 className=" text-2xl font-semibold pt-2">{career.title}</h3>
                <p className="text-xs text-[#736C6C] flex-1">
                  {career.experience}
                </p>
                <p className="text-sm text-[#736C6C] py-4">
                  {career.description}
                </p>
                <button className="text-xs text-blue-500" onClick={toggleOpen}>
                  Apply &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JobModal open={open} setOpen={setOpen} />
    </section>
  );
};

export default Page;
