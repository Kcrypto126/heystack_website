"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "@/services/queries";
import { Author, PostDetail } from "@/components/Blogs";
import PostHeader from "@/components/Blogs/PostHeader";
import TableofContent from "@/components/Blogs/TableofContent";
import Recommendations from "@/components/Blogs/Recommendations";
import LoadingScreen from "@/components/Blogs/LoadingScreen";

const PostData = ({ params }) => {
  const [mounted, setMounted] = useState(false);
  const { loading, error, data } = useQuery(GET_SINGLE_POST, {
    variables: { slug: params?.slug },
    skip: !mounted, // Skip the query during SSR
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || loading) return <LoadingScreen />;
  if (error) return <div>Error: {error.message}</div>;

  const { author, title, summary, content, coverImage, date } =
    data?.post || {};

  const TableOfContent = [];
  content?.json?.children?.forEach((item) => {
    if (
      item.type === "heading-one" ||
      item.type === "heading-two" ||
      item.type === "heading-three" ||
      item.type === "heading-four" ||
      item.type === "heading-five" ||
      item.type === "heading-six"
    )
      TableOfContent.push(item?.children[0]?.text);
  });

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-7xl lg:mx-auto md:mx-8 mx-5 my-20 gap-8 ">
        <article className="max-w-4xl col-span-2">
          <PostHeader
            _title={title}
            _summary={summary}
            _coverImage={coverImage}
            _date={date}
          />
          <PostDetail content={content} />
        </article>

        <div className="lg:flex flex-col hidden items-center justify-start">
          <Author writer={author} />
          <TableofContent data={TableOfContent} />
        </div>
      </div>
      <div className="lg:hidden block mx-5 my-10">
        <Author writer={author} />
      </div>
      <hr />
      <Recommendations />
    </>
  );
};

export default PostData;
