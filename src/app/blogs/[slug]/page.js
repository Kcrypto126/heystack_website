"use client";
import React from "react";
import { useSuspenseQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "@/services/queries";
import { Author, PostDetail } from "@/components/Blogs";
import PostHeader from "@/components/Blogs/PostHeader";
import { POSTS } from "@/constants/dummy";

const PostDetails = ({ params }) => {
  // const { loading, error, data } = useSuspenseQuery(GET_SINGLE_POST, {
  //   variables: { slug: params?.slug },
  // });
  // const { author, title, summary, content, coverImage, date } = data?.post;

  //test data

  const data = POSTS.data.postsConnection.edges[1];
  const { loading, error } = false;
  const { author, title, summary, content, coverImage, date } = data?.node;

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto my-20 gap-4">
      <article className="max-w-4xl col-span-2">
        {!loading && !error ? (
          <div>
            <PostHeader
              _title={title}
              _summary={summary}
              _coverImage={coverImage}
              _date={date}
            />
            <PostDetail content={content} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </article>

      <Author writer={author} />
    </div>
  );
};

export default PostDetails;
