import { useBlogs } from "@/context/BlogContext";
import React from "react";
import Link from "next/link";
import PostCard from "./PostCard";

const Recommendations = () => {
  const { Posts } = useBlogs();
  const RecommendedPosts = Posts.slice(0, 3);

  return (
    <>
      <h1 class="text-4xl mx-auto  max-w-6xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {RecommendedPosts.map(({ cursor, node }) => {
          return <PostCard key={node.title} post={node} />;
        })}
      </div>
    </>
  );
};

export default Recommendations;
