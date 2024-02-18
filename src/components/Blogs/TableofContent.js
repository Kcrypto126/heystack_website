"use client";

import { slugifyHeading } from "@/utils/slugifyHeading";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Heading } from "@/utils/styles";
import { Form } from "./NewsLetter";

const TocNavElement = ({ hash, children, level, activeId }) => {
  const id = slugifyHeading(hash);
  return (
    <li
      // className={clsx("list-disc transition-colors", {
      //   "text-slate-300": id !== activeId,
      //   "text-blue-700 ": id === activeId,
      // })}
      className={clsx("list-disc transition-colors", {
        "bg-blue-50": id === activeId,
      })}
    >
      <a
        className="block text-slate-700 hover:text-blue-400 no-underline"
        href={`#${id}`}
      >
        {hash}
      </a>
    </li>
  );
};
const TableofContent = ({ data }) => {
  const headingsList = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [headings, setHeadings] = useState([]); // Add state to store our heading ID's and their index
  const scrollRef = useRef(0); // Store the previous scroll position

  useEffect(() => {
    const firstHeadingId = slugifyHeading(data[0]);

    setActiveId(firstHeadingId);

    // Loop over our headings and create an id for each, store it in the new state
    data.forEach((heading, index) => {
      const id = slugifyHeading(heading);

      if (id) {
        setHeadings((headings) => [...headings, { id, index }]);
      }
    });
  }, [data]);

  // Add a new useEffect hook with our IntersectionObserver logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");

          if (entry.isIntersecting) {
            setActiveId(id);
            scrollRef.current = window.scrollY;
          } else {
            const diff = scrollRef.current - window.scrollY;
            const isScrollingUp = diff > 0;
            const currentIndex = headings.findIndex(
              (heading) => heading.id === id
            );
            const prevEntry = headings[currentIndex - 1];
            const prevId = prevEntry?.id;

            if (isScrollingUp && prevId) {
              setActiveId(prevId);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -95% 0px",
      }
    );

    const observeHeadings = () => {
      headings.forEach((heading) => {
        const currentHeading = document.getElementById(heading.id);

        if (currentHeading) {
          observer.observe(currentHeading);
        }
      });
    };

    if (headings.length) {
      observeHeadings();
    }

    return () => {
      headings.forEach((heading) => {
        const currentHeading = document.getElementById(heading.id);

        if (currentHeading) {
          observer.unobserve(currentHeading);
        }
      });
    };
  }, [headings]);

  return (
    <div className="sticky top-12 mt-[80vh] z-50">
      <div className="flex prose flex-col space-y-1  px-4 py-4 rounded-md shadow-lg w-[24rem] h-fit bg-white">
        <aside>
          <nav>
            <Heading as="h3">Table of Content</Heading>
            <ol className="pl-4 mt-4" ref={headingsList} role="list">
              {data.map((hash) => {
                return (
                  <TocNavElement hash={hash} activeId={activeId} key={hash} />
                );
              })}
            </ol>
          </nav>
        </aside>
      </div>
      <div className="my-4">
        <Form />
      </div>
    </div>
  );
};

export default TableofContent;
