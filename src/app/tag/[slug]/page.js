"use client";
import { FeaturedPost, PostCard } from "@/components/Blogs";
import React, { useContext, useEffect, useState } from "react";
import Paginate from "@/utils/paginate";
import { useSuspenseQuery } from "@apollo/client";

import { ALL_POSTS, posts } from "@/constants/dummy";
import Tab from "@/components/Tab";
import { useBlogs } from "@/context/BlogContext";
import { GET_POST_FOR_TAG, GET_TAGS } from "@/services/queries";
import { Badge } from "@/components/Blogs/Badge";

const Page = ({ params }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  const { allTags } = useBlogs();

  const { loading, error, data } = useSuspenseQuery(GET_POST_FOR_TAG, {
    variables: { slug: params?.slug },
  });

  const Posts = data?.postsConnection?.edges;
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
      <div className="max-w-5xl flex mx-auto gap-3 flex-wrap">
        {allTags.map((item) => {
          return <Badge href={item.slug} name={item.name} key={item.name} />;
        })}
      </div>

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

export default Page;
