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
  return (
    <div className="">
      <ul className="flex flex-row items-center justify-center gap-3">
        <li
          onClick={previousPage}
          className="cursor-pointer   rounded-md hover:bg-[#F4DBFF] text-[#660091]"
        >
          {"<"}
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={clsx(
              "cursor-pointer hover:bg-pageHover text-page",
              number === currentPage && "font-bold bg-pageHover "
            )}
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="cursor-pointer">
          {">"}
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
