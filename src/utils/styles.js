import Image from "next/image";
import { slugifyHeading } from "./slugifyHeading";

const sharedClasses = "dark:text-white py-2";
const bodyClasses = "text-lg text-gray-700";
const listClass = "text-md";

export const Heading = ({
  as: Comp = "h1",
  size = "4xl",
  children,
  className,
  id, // Pass the ID prop
}) => {
  console.log(children.props?.content[0].text);
  return (
    <Comp
      id={slugifyHeading(children.props?.content[0].text)}
      className={"font-sans font-semibold tracking-tighter text-slate-800"}
    >
      {children}
    </Comp>
  );
};

export const renderers = {
  h1: ({ children }) => <Heading children={children}>{children}</Heading>,
  h2: ({ children }) => <Heading children={children}>{children}</Heading>,
  h3: ({ children }) => (
    <h3 className={`text-3xl ${sharedClasses}`}>{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className={`text-2xl ${sharedClasses}`}>{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className={`text-xl ${sharedClasses}`}>{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className={`text-large ${sharedClasses}`}>{children}</h6>
  ),
  p: ({ children }) => (
    <p className={`my-4${bodyClasses} ${sharedClasses}`}>{children}</p>
  ),
  a: ({ children, href, openInNewTab, title }) => (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      style={{ textDecoration: "underline", color: "blue" }}
      rel="noreferrer"
      title={title}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className={`list-disc list-inside   ${listClass} ${sharedClasses}`}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      className={`list-decimal list-inside my-4  ${listClass} ${sharedClasses}`}
      style={{ listStyleType: "decimal" }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li
      className={`list-disc  ${listClass} ${sharedClasses}`}
      style={{ listStyleType: "disc" }}
    >
      {children}
    </li>
  ),
  code: ({ children }) => (
    <code
      className={`bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm ${sharedClasses}`}
    >
      {children}
    </code>
  ),
  code_block: ({ children }) => (
    <pre
      style={{
        background: "black",
        color: "white",
        overflowY: "scroll",
      }}
      className="px-4 py-8 rounded-lg my-10 "
    >
      <code className={`bg-primary rounded-md p-2 text-sm ${sharedClasses}`}>
        {children}
      </code>
    </pre>
  ),
  img: ({ src, altText, height, width, title }) => (
    <Image
      src={src}
      alt={altText}
      height={height}
      width={width}
      className="object-cover w-full rounded-lg "
    />
  ),
  blockquote: ({ children }) => (
    <blockquote
      className="py-2 px-2 my-6 "
      style={{ borderLeftColor: "lightgray", borderLeftWidth: 5 }}
    >
      <p className="text-base italic font-medium leading-relaxed text-gray-900 dark:text-white">
        {children}
      </p>
    </blockquote>
  ),
  table: ({ children }) => (
    <table className="table-auto border-separate border-spacing-2 my-10  flex items-center flex-col max-w-full justify-center">
      {children}
    </table>
  ),
  table_head: ({ children }) => (
    <thead
      className="border border-slate-600"
      style={{ background: "lightgray" }}
    >
      {children}
    </thead>
  ),
  table_header_cell: ({ children }) => (
    <th className="px-4 py-4">{children}</th>
  ),
  table_body: ({ children }) => <tbody className="">{children}</tbody>,
  table_row: ({ children }) => (
    <tr className="border border-slate-800">{children}</tr>
  ),
  table_cell: ({ children }) => (
    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 border border-slate-800">
      {children}
    </td>
  ),

  iframe: ({ children, url, title }) => (
    <iframe
      className="aspect-video rounded-md object-cover"
      src={`https://www.youtube.com/embed/${getLink(url)}`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      title={title}
    ></iframe>
  ),
};

function getLink(url) {
  const embed = url.split("/");
  return embed[3];
}
