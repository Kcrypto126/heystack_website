import work from "@/constants/work";
import Image from "next/image";
import React from "react";

function Work() {
  return (
    <div className="work">
      <div className="md:mt-26 mt-20 container mx-auto ">
        <div className="px-1">
          <p className="text-center md:text-[2.5rem] text-[1.5rem] px-3 work-heading">
            How brands leverage Heystack Insights
          </p>
        </div>
        <div className="md:mt-8 w-[90%] mx-auto flex flex-col gap-10 ">
          {work.map((items, ind) => (
            <div
              className={`flex 
            ${
              ind % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }  px-10  md:mt-0 flex-col-reverse`}
              key={ind}
            >
              <div className="flex flex-col basis-[60%] content-div md:gap-4 gap-3 md:p-10 md:mt-0 mt-5">
                <h1 className="md:text-2xl  tracking-wider">
                  MINIMIZE OPTAMIZATION
                </h1>
                <p className="md:text-base text-sm text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquet scelerisque eros, sed tempor velit consectetur in.
                  Morbi tincidunt
                </p>
                <span className="h-[0.5px] w-[90%] bg-[#464646]"></span>

                <Image
                  src={"/arrow.svg"}
                  width="200"
                  height="100"
                  alt="btn"
                  className=" cursor-pointer"
                />
              </div>
              <div className="basis-[60%] md:mt-0 mt-10 flex justify-center items-center md:p-10">
                <Image
                  src={"/content.png"}
                  height={"50"}
                  width={"50"}
                  alt="content"
                  className="w-[100%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
