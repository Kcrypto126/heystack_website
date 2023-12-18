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
          className="block cursor-pointer shadow-md border rounded-md hover:bg-[#F4DBFF] text-[#660091]"
        >
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              "cursor-pointer " +
              (number === currentPage ? "cursor-pointer font-bold" : "")
            }
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="cursor-pointer">
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
