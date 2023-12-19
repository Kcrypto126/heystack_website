import { linkedIn_logo, twitter_logo } from "@/assets";
import React from "react";
import Link from "next/link";

const Author = ({ writer }) => {
  const { name, id, photo } = writer;
  return (
    <div className="shadow-lg rounded-lg p-4 w-[28rem] h-fit  col-span-1 fixed right-10 ">
      <div className="flex flex-row items-center ">
        <img
          src={photo?.url}
          alt="author"
          className="w-20 h-20 rounded-full object-cover"
        />
        <p className="font-semibold text-lg ml-2">{name}</p>
      </div>
      <p className=" text-[#676767] py-2 px-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ut
        deleniti fuga sit ad nemo?
      </p>
      <div className="flex flex-row gap-3 mx-2">
        <Link href={"www.google.com"}>{twitter_logo}</Link>
        <Link href={"www.google.com"}>{linkedIn_logo}</Link>
      </div>
    </div>
  );
};

export default Author;
