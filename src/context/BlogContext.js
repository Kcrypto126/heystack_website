"use client";
import { createContext, useContext } from "react";
import { GET_ALL_POST } from "@/services/queries";
import { useSuspenseQuery } from "@apollo/client";

const BlogContext = createContext(null);

export const useBlogs = () => {
  return useContext(BlogContext);
};

export const BlogsProvider = ({ children }) => {
  const { loading, error, data } = useSuspenseQuery(GET_ALL_POST);

  const value = {
    loading,
    error,
    Posts: data?.postsConnection?.edges,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
