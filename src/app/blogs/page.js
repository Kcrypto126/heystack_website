"use client";
import { FeaturedPost, PostCard } from "@/components/Blogs";
import React, { useState } from "react";
import { GET_ALL_POST } from "@/services/queries";
import { useSuspenseQuery } from "@apollo/client";
import Paginate from "@/utils/paginate";
import { posts } from "@/constants/dummy";
import Tab from "@/components/Tab";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const { loading, error, data } = useSuspenseQuery(GET_ALL_POST);

  const Posts = data?.postsConnection?.edges;
  // const Posts = posts;

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
      <FeaturedPost post={Posts[0]} />
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {!loading && !error ? (
          currentPosts.map(({ cursor, node }) => {
            return <PostCard key={cursor} post={node} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={Posts.length}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />

      <Tab />
    </div>
  );
};

export default page;
