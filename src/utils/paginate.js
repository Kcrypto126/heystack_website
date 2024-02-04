import clsx from "clsx";
import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const displayPageNumbers = () => {
    const adjacentPageCount = 2;
    const ellipsis = " ... ";

    let pages = [];

    for (let i = 0; i < pageNumbers.length; i++) {
      if (
        i < adjacentPageCount ||
        i >= pageNumbers.length - adjacentPageCount ||
        Math.abs(currentPage - pageNumbers[i]) <= adjacentPageCount
      ) {
        pages.push(
          <li
            key={pageNumbers[i]}
            onClick={() => paginate(pageNumbers[i])}
            className={clsx(
              "cursor-pointer hover:bg-pageHover text-page bg-page",
              pageNumbers[i] === currentPage && "font-bold bg-pageHover "
            )}
          >
            {pageNumbers[i]}
          </li>
        );
      } else if (
        pages[pages.length - 1] !== ellipsis &&
        i === adjacentPageCount
      ) {
        pages.push(<li key={i}>{ellipsis}</li>);
      }
    }

    return pages;
  };

  return (
    <div>
      <ul className="flex flex-row items-center justify-center gap-3">
        {/* <li
          onClick={previousPage}
          className="cursor-pointer   rounded-md hover:bg-[#F4DBFF] text-[#660091]"
        >
          {"<"}
        </li> */}
        {displayPageNumbers()}
        {/* <li onClick={nextPage} className="cursor-pointer">
          {">"}
        </li> */}
      </ul>
    </div>
  );
};

export default Paginate;
