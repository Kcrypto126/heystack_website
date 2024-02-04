import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";

const PostCard = ({ post }) => {
  const { title, summary, slug, author, coverImage, date, categories } = post;

  const category = categories[0];

  return (
    <div className="my-5 flex flex-col">
      <div class="h-min overflow-hidden rounded-md">
        <img
          src={coverImage?.url}
          alt="data"
          className="hover:scale-105 transition-all duration-500 w-full  lg:h-[200px] h-auto rounded-lg bg-center object-fill cursor-pointer"
        />
      </div>

      <h1 className="font-semibold py-4 text-xl hover:text-page">
        <Link href={`/blogs/${slug}`}>{title}</Link>
      </h1>
      <p className="text-[#676767] py-3 flex-1">
        <Link href={`/blogs/${slug}`}>{summary}</Link>
      </p>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <Link href={`/blogs/${slug}`}>
            <img
              src={author?.photo?.url}
              alt="author"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
          </Link>
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
