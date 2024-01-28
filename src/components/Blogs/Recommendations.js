import { useBlogs } from "@/context/BlogContext";
import React from "react";
import Link from "next/link";
import PostCard from "./PostCard";

const Recommendations = () => {
  const { Posts } = useBlogs();
  const RecommendedPosts = Posts.slice(0, 3);

  return (
    <>
      <h1 class="text-4xl lg:mx-auto md:mx-8 mx-5  max-w-6xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4">
        Latest Blogs
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl lg:mx-auto md:mx-8 mx-5">
        {RecommendedPosts.map(({ cursor, node }) => {
          return <PostCard key={node.title} post={node} />;
        })}
      </div>
    </>
  );
};

export default Recommendations;
