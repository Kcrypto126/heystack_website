"use client";
import { FeaturedPost, PostCard } from "@/components/Blogs";
import React, { useState } from "react";
import Paginate from "@/utils/paginate";
import { ALL_POSTS, posts } from "@/constants/dummy";
import Tab from "@/components/Tab";
import { useBlogs } from "@/context/BlogContext";
import NewsLetter from "@/components/Blogs/NewsLetter";
import BookDemo from "@/components/Blogs/BookDemo";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  const { loading, error, Posts } = useBlogs();

  if (Posts.length == 0) return;

  // test - data;
  // const Posts = ALL_POSTS.data.postsConnection.edges;
  // const { loading, error } = false;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(Posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {!loading && !error ? (
        <>
          {Posts[0] && <FeaturedPost post={Posts[0]} />}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl lg:mx-auto gap-8 md:mx-8 mx-5">
            {currentPosts.map(({ cursor, node }) => {
              return <PostCard key={cursor} post={node} />;
            })}
          </div>
          <Paginate
            postsPerPage={postsPerPage}
            totalPosts={Posts.length}
            currentPage={currentPage}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
          <NewsLetter />
          <BookDemo />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
