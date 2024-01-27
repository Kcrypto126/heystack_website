import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";

const PostCard = ({ post }) => {
  const { title, summary, slug, author, coverImage, date, categories } = post;

  const category = categories[0];

  return (
    <div className="my-5 flex flex-col">
      <img
        src={coverImage?.url}
        alt="data"
        className="w-full h-[200px] rounded-lg bg-center object-fill cursor-pointer"
      />
      <h1 className="font-bold py-4 text-xl hover:text-blue-500">
        <Link href={`/blogs/${slug}`}>{title}</Link>
      </h1>
      <p className="text-[#676767] py-3 flex-1">{summary}</p>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <img
            src={author?.photo?.url}
            alt="author"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <p className="py-1 px-2 font-semibold">{author?.name}</p>
        </div>
        <p className="text-sm">
          {new Date(`${date}`).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <Badge href={category.slug} name={category.name} />
    </div>
  );
};

export default PostCard;
