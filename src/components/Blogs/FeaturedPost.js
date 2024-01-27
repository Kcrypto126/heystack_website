import React from "react";
import Image from "next/image";
import Link from "next/link";
const FetauredPostDetails = ({ post }) => {
  const { author, title, slug, date, coverImage, summary } = post?.node;

  return (
    <div className="grid grid-cols-2 gap-8  items-center justify-center">
      <img
        src={coverImage?.url}
        alt="featuredImage"
        className="w-full h-72 rounded-lg object-cover "
      />
      <div>
        <h1 className="font-bold py-4 text-xl">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h1>
        <p className="text-[#676767] py-2">{summary}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <img
              src={author?.photo?.url}
              alt="author"
              className="w-10 h-10 rounded-full object-cover"
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
      </div>
    </div>
  );
};

const FeaturedPost = ({ post }) => {
  return (
    <div className="bg-[#EAF0FF] w-full my-10 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4">
          Hey-Stack Blogs
        </h1>
        <p className="py-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, nemo.
        </p>
        <p className="font-bold text-2xl py-4">Latest Post</p>
        <FetauredPostDetails post={post} />
      </div>
    </div>
  );
};

export default FeaturedPost;
