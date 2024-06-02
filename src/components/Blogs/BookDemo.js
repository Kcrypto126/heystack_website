import React from "react";

const BookDemo = () => {
  return (
    <div className="max-w-6xl lg:mx-auto md:mx-8 mx-5 bg-gradient-to-tr from-[#4f31df] to-[#00c6ff] my-20 rounded-xl ">
      <div className="max-w-xl flex flex-col items-center justify-center  mx-auto  prose text-white  lg:h-96 h-auto space-y-2 px-4 md:px-0 py-5">
        <h1 className="text-white my-2 text-center">
          Book Your Hey Stack Demo
        </h1>
        <p className="text-center py-2">
          Hey Stack is the most comprehensive analytics solution for aggregating
          and analyzing customer reviews at scale.
        </p>
        <button
          className="bg-white rounded-full uppercase font-semibold  text-black py-4 mt-8 px-8 text-sm"
          onClick={() =>
            window.open("https://calendly.com/sharadkraj/heystack-demo")
          }
        >
          see live in action {">"}
        </button>
      </div>
    </div>
  );
};

export default BookDemo;
