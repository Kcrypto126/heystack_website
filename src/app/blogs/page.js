"use client";
import { FeaturedPost, PostCard } from "@/components/Blogs";
import React, { useEffect, useState } from "react";
import { getPosts } from "@/services";

const page = () => {
  const [Posts, setPosts] = useState([]);
  const getPostsData = async () => {
    const posts = (await getPosts()) || [];
    setPosts(posts);
    console.log(posts);
    return {
      props: posts,
    };
  };

  useEffect(() => {
    getPostsData();
  }, []);
  return (
    <div>
      <h1>Hey-Stack Blogs</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam iure
        maiores harum voluptatibus culpa, temporibus amet ut. Obcaecati, magni
        aspernatur.
      </p>
      <FeaturedPost />
      <div>
        {Posts.map(({ node }) => {
          return <PostCard key={node?.title} post={node} />;
        })}
      </div>
    </div>
  );
};

export default page;
