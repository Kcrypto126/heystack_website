import { RichText } from "@graphcms/rich-text-react-renderer";
import React from "react";
import { renderers } from "@/utils/styles";

const PostDetail = ({ content }) => {
  return (
    <article>
      <RichText content={content.json.children} renderers={renderers} />
    </article>
  );
};

export default PostDetail;
