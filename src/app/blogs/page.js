"use client";
import { FeaturedPost, PostCard } from "@/components/Blogs";
import React, { useState, useEffect } from "react";
import Paginate from "@/utils/paginate";
import { useBlogs } from "@/context/BlogContext";
import NewsLetter from "@/components/Blogs/NewsLetter";
import BookDemo from "@/components/Blogs/BookDemo";
import Loading from "./loading";
import LoadingScreen from "@/components/Blogs/LoadingScreen";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [mounted, setMounted] = useState(false);

  const { loading, error, Posts } = useBlogs();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingScreen />;

  if (loading) return <LoadingScreen />;
  if (error) return <div>Error: {error.message}</div>;
  if (!Posts || Posts.length === 0) return <div>No posts found</div>;

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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl lg:mx-auto gap-8 md:mx-8 mx-5 px-2 md:px-5 lg:px-0">
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
        <LoadingScreen />
      )}
    </div>
  );
};

export default Page;
