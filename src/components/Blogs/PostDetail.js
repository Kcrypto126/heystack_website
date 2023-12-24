import { RichText } from "@graphcms/rich-text-react-renderer";
import React from "react";
import { renderers } from "@/utils/styles";

const PostDetail = ({ content }) => {
  const contentChildrenDeepCopy = content?.json?.children
    ? JSON.parse(JSON.stringify(content.json.children))
    : null;

  return (
    <article>
      <RichText content={contentChildrenDeepCopy} renderers={renderers} />
    </article>
  );
};

export default PostDetail;
