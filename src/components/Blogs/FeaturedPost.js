import React from "react";
import Image from "next/image";
import Link from "next/link";
const FetauredPostDetails = ({ post }) => {
  const { author, title, slug, date, coverImage, summary } = post?.node;

  return (
    <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 grid-cols-1 items-center justify-center ">
      <div class="h-min overflow-hidden rounded-md">
        <img
          src={coverImage?.url}
          alt="featuredImage"
          className="hover:scale-105 transition-all duration-500 max-w-full lg:h-80 h-auto rounded-lg object-cover cursor-pointer "
        />
      </div>
      <div>
        <h1 className="font-semibold py-4 md:text-3xl text-xl hover:text-page">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h1>
        <p className="text-[#676767] ,md:py-2 pb-3 text-sm">{summary}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <Link href={`/blogs/${slug}`}>
              <img
                src={author?.photo?.url}
                alt="author"
                className="w-10 h-10 rounded-full object-cover"
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
      </div>
    </div>
  );
};

const FeaturedPost = ({ post }) => {
  return (
    <div className="bg-[#EAF0FF] w-full my-10 py-10 px-2 md:px-5 lg:px-0">
      <div className="max-w-6xl lg:mx-auto md:mx-8 mx-5">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4">
          Hey-Stack Blogs
        </h1>
        <p className="py-2">
          Your go-to place for actionale insights and strategies on everything.
        </p>
        <p className="font-bold text-2xl py-4">Latest Post</p>
        <FetauredPostDetails post={post} />
      </div>
    </div>
  );
};

export default FeaturedPost;
