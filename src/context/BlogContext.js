"use client";
import { createContext, useContext } from "react";
import { GET_ALL_POST, GET_TAGS } from "@/services/queries";
import { useSuspenseQuery } from "@apollo/client";

const BlogContext = createContext(null);

export const useBlogs = () => {
  return useContext(BlogContext);
};

export const BlogsProvider = ({ children }) => {
  const {
    loading: loadingTags,
    error: errorTags,
    data: Tags,
  } = useSuspenseQuery(GET_TAGS);
  const { loading, error, data } = useSuspenseQuery(GET_ALL_POST);
  const { categories } = Tags;
  const value = {
    loading,
    error,
    Posts: data?.postsConnection?.edges,
    allTags: categories,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
