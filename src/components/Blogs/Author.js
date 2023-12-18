import React from "react";

const Author = ({ writer }) => {
  const { name, linkedIn, id, photo } = writer;
  return (
    <div>
      <p>{name}</p>
      <p></p>
    </div>
  );
};

export default Author;
