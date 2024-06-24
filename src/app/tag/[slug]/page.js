"use client";
import { FeaturedPost, PostCard } from "@/components/Blogs";
import React, { useContext, useEffect, useState } from "react";
import Paginate from "@/utils/paginate";
import { useSuspenseQuery } from "@apollo/client";

import { ALL_POSTS, posts } from "@/constants/dummy";
import { useBlogs } from "@/context/BlogContext";
import { GET_POST_FOR_TAG, GET_TAGS } from "@/services/queries";
import { Badge } from "@/components/Blogs/Badge";
import NewsLetter from "@/components/Blogs/NewsLetter";

const Page = ({ params }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  const { allTags } = useBlogs();

  const { loading, error, data } = useSuspenseQuery(GET_POST_FOR_TAG, {
    variables: { slug: params?.slug },
  });

  const Posts = data?.postsConnection?.edges;
  if (Posts.length == 0) return;

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
    <div className="max-w-6xl lg:mx-auto md:mx-8 mx-5 my-20 ">
      <div className="px-6 md:px-8 lg:px-0">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4">
          Blog Categories
        </h1>
        <div className=" flex mx-auto gap-3 flex-wrap">
          {allTags.map((item) => {
            return <Badge href={item.slug} name={item.name} key={item.name} />;
          })}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-auto">
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
      </div>

      <NewsLetter />
    </div>
  );
};

export default Page;
