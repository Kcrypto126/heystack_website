import React from "react";

function Container({ children, id }) {
  return (
    <section className="px-2 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8" id={id}>
      {children}
    </section>
  );
}

export default Container;
