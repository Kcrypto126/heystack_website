"use client";
import React from "react";
import { useSuspenseQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "@/services/queries";
import { Author, PostDetail } from "@/components/Blogs";
import PostHeader from "@/components/Blogs/PostHeader";

const PostDetails = ({ params }) => {
  const { loading, error, data } = useSuspenseQuery(GET_SINGLE_POST, {
    variables: { slug: params?.slug },
  });

  const { author, title, summary, content, createdAt, coverImage, id, date } =
    data?.post;

  return (
    <article className="max-w-4xl mx-auto">
      {!loading && !error ? (
        <div>
          <PostHeader
            _title={title}
            _summary={summary}
            _coverImage={coverImage}
            _date={date}
          />
          <PostDetail content={content} />
          {/* <Author writer={author} /> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};

export default PostDetails;
