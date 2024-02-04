import React from "react";
import { motion, useScroll } from "framer-motion";

const PostHeader = ({ _title, _summary, _coverImage, _date }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className=" bg-gradient-to-tr from-[#4F31DF] to-[#00C6FF] rounded-xl py-7 px-5 lg:h-[35rem]">
        <div className="flex flex-row items-center">
          <button className="border border-white px-4 py-1 rounded-lg mr-2 text-white cursor-pointer hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-75">
            Hey-Stack
          </button>
          <p className="text-sm text-white mx-2">
            {new Date(`${_date}`).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <h1 className="text-white font-bold md:text-2xl text-xl px-2 py-5 lg:mr-16">
          {_title}
        </h1>
        <img
          src={_coverImage?.url}
          alt="coverImage"
          className="object-cover rounded-xl lg:-mb-20 lg:h-[30rem]  h-auto w-full"
        />
      </div>

      <motion.div
        className="h-2 bg-gradient-to-tr from-[#4F31DF] to-[#00C6FF] sticky top-1 rounded-full  max-w-4xl lg:block hidden lg:mt-24 "
        style={{
          scaleX: scrollYProgress,
          transformOrigin: 0,
        }}
        direction="left"
      />
      <div className="my-2 bg-gradient-to-tr from-[#4F31DF] to-[#00C6FF] rounded-md py-2 px-2  text-white text-center font-semibold sticky top-4 max-w-3xl lg:block hidden">
        {_title}
      </div>
      <h1 className="font-bold lg:text-xl prose  md:py-8 py-4 max-w-3xl">
        {_summary}
      </h1>
    </>
  );
};

export default PostHeader;
