import { RichText } from "@graphcms/rich-text-react-renderer";
import React from "react";

const PostDetail = ({ content }) => {
  return (
    <article>
      <RichText
        content={content.json.children}
        renderers={{
          h1: ({ children }) => <h1 className="py-2  text-5xl">{children}</h1>,
          h2: ({ children }) => <h2 className="py-2  text-4xl">{children}</h2>,
          h3: ({ children }) => <h3 className="py-2  text-3xl">{children}</h3>,
          h4: ({ children }) => <h4 className="py-2  text-2xl">{children}</h4>,
          h5: ({ children }) => <h5 className="py-2  text-xl">{children}</h5>,
          h6: ({ children }) => <h6 className="py-2  text-sm">{children}</h6>,
          p: ({ children }) => <p className="py-3 text-[15px]">{children}</p>,

          img: ({ src, altText, height, width, title }) => (
            <img
              src={src}
              alt={altText}
              className="object-cover w-full rounded-lg"
            />
          ),
          a: ({ children, href, openInNewTab }) => (
            <a
              href={href}
              target={openInNewTab ? "_blank" : "_self"}
              style={{ color: "green" }}
              rel="noreferrer"
            >
              {children}
            </a>
          ),
          bold: ({ children }) => <strong>{children}</strong>,
          italic: ({ children }) => <i className="">{children}</i>,
          underline: ({ children }) => <u>{children}</u>,
          // iframe,
          // blockquote,
          // code,
          // code_block,
          // video,
          // ul,
          // ol,
          // li,
          // table,
          // table_body,
          // table_cell,
          // table_header_cell,
          // table_head,
          // table_row,

          Asset: {
            text: () => (
              <div>
                <p>text plain</p>
              </div>
            ),
          },
        }}
      />
    </article>
  );
};

export default PostDetail;
