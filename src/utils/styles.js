import Image from "next/image";

// export const renderers = {
//   h1: ({ children }) => <h1 className="py-2  text-5xl">{children}</h1>,
//   h2: ({ children }) => <h2 className="py-2  text-4xl">{children}</h2>,
//   h3: ({ children }) => <h3 className="py-2  text-3xl">{children}</h3>,
//   h4: ({ children }) => <h4 className="py-2  text-2xl">{children}</h4>,
//   h5: ({ children }) => <h5 className="py-2  text-xl">{children}</h5>,
//   h6: ({ children }) => <h6 className="py-2  text-sm">{children}</h6>,
//   p: ({ children }) => <p className="py-3 text-[15px]">{children}</p>,

//   img: ({ src, altText, height, width, title }) => (
//     <Image
//       src={src}
//       alt={altText}
//       height={height}
//       width={width}
//       className="object-cover w-full rounded-lg"
//     />
//   ),
//   a: ({ children, href, openInNewTab }) => (
//     <a
//       href={href}
//       target={openInNewTab ? "_blank" : "_self"}
//       style={{ color: "green" }}
//       rel="noreferrer"
//     >
//       {children}
//     </a>
//   ),
//   bold: ({ children }) => <strong>{children}</strong>,
//   italic: ({ children }) => <i className="">{children}</i>,
//   underline: ({ children }) => <u>{children}</u>,
//   code: ({ children }) => (
//     <code className="bg-slate-700 text-white rounded-lg p-4">{children}</code>
//   ),
//   // iframe,
//   // blockquote,
//   // code,
//   // video,
//   // ul,
//   // ol,
//   // li,
//   // table,
//   // table_body,
//   // table_cell,
//   // table_header_cell,
//   // table_head,
//   // table_row,

//   Asset: {
//     text: () => (
//       <div>
//         <p>text plain</p>
//       </div>
//     ),
//   },
// };

const sharedClasses = "dark:text-white py-2";
const bodyClasses = "text-lg text-gray-700";

export const renderers = {
  h1: ({ children }) => (
    <h1
      className={`mb-4 text-4xl text-gray-900 md:text-5xl lg:text-6xl ${sharedClasses}`}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className={`mb-4 text-3xl text-gray-900 md:text-5xl lg:text-6xl ${sharedClasses}`}
    >
      {children}
    </h2>
  ),
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
    <p className={`my-4 text-lg ${bodyClasses} ${sharedClasses}`}>{children}</p>
  ),
  ul: ({ children }) => (
    <ul
      className={`list-disc list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}`}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      className={`list-decimal list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}`}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className={`my-2 text-lg ${bodyClasses} ${sharedClasses}`}>
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
    <pre>
      <code
        className={`bg-gray-600 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm ${sharedClasses}`}
      >
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
      className="object-cover w-full rounded-lg"
    />
  ),
  blockquote: ({ children }) => (
    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
      <p className="text-lg italic font-medium leading-relaxed text-gray-900 dark:text-white">
        {children}
      </p>
    </blockquote>
  ),
};
