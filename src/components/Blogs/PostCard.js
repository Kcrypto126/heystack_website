import React from "react";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostCard = ({ post }) => {
  console.log(post);
  const { title, summary, slug, author, coverImage, content } = post;
  return (
    <div className="bg-green-100">
      <img src={coverImage?.url} alt="data" />

      <h1>{title}</h1>
      <p>{summary}</p>
      <p>{author?.name}</p>
      <RichText content={content?.json} />
    </div>
  );
};

export default PostCard;
