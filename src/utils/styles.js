import Image from "next/image";
import { slugifyHeading } from "./slugifyHeading";
import clsx from "clsx";

const sharedClasses = "dark:text-white py-2";
const bodyClasses = "text-lg text-gray-700";
const listClass = "text-md";

export const Heading = ({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
  id,
}) => {
  return (
    <Comp id={slugifyHeading(children.props?.content[0].text)}>{children}</Comp>
  );
};

export const renderers = {
  h1: ({ children }) => (
    <Heading as={"h1"} size={"4xl"}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" size={"3xl"}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" size={"2xl"}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading as="h4" size={"xl"}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => <Heading as="h5">{children}</Heading>,
  h6: ({ children }) => <Heading as="h6">{children}</Heading>,
  p: ({ children }) => <p>{children}</p>,
  a: ({ children, href, openInNewTab, title }) => (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      // style={{ textDecoration: "underline", color: "blue" }}
      rel="noreferrer"
      title={title}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul>{children}</ul>,
  ol: ({ children }) => <ol>{children}</ol>,
  li: ({ children }) => <li className="">{children}</li>,
  code: ({ children }) => <code>{children}</code>,
  code_block: ({ children }) => (
    <pre>
      <code>{children}</code>
    </pre>
  ),
  img: ({ src, altText, height, width, title }) => (
    <img src={src} alt={altText} />
  ),
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  table: ({ children }) => <table className="">{children}</table>,
  table_head: ({ children }) => (
    <thead className="   border ">{children}</thead>
  ),
  table_header_cell: ({ children }) => (
    <th
      scope="col"
      className="px-6 py-3 border text-center bg-slate-400"
      style={{ background: "lightgray" }}
    >
      {children}
    </th>
  ),
  table_body: ({ children }) => <tbody className="">{children}</tbody>,
  table_row: ({ children }) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {children}
    </tr>
  ),
  table_cell: ({ children }) => (
    <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200 border border-slate-800 text-center">
      {children}
    </td>
  ),

  iframe: ({ children, url, title }) => (
    <div className="flex items-center justify-center py-4">
      <iframe
        className=" rounded-md  h-full object-cover w-52"
        src={`https://www.youtube.com/embed/${getLink(url)}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen={true}
        title={title}
        style={{ width: "500px", height: "300px" }}
      ></iframe>
    </div>
  ),
};

function getLink(url) {
  const embed = url.split("/");
  return embed[3];
}
