import React from "react";

function Container({ children, id }) {
  return (
    <section
      className="px-2 lg:py-16 py-8 md:py-8 mx-auto max-w-7xl sm:px-6 lg:px-8"
      id={id}
    >
      {children}
    </section>
  );
}

export default Container;
