import { RichText } from "@graphcms/rich-text-react-renderer";
import React from "react";
import { renderers } from "@/utils/styles";

const PostDetail = ({ content }) => {
  const contentChildrenDeepCopy = content?.json?.children
    ? JSON.parse(JSON.stringify(content.json.children))
    : null;

  return (
    <article className="prose  prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-slate  lg:prose-lg prose-img:w-full prose-img:rounded-xl">
      <RichText content={contentChildrenDeepCopy} renderers={renderers} />
    </article>
  );
};

export default PostDetail;
