import { getPosts } from "@/services";

export const getPostsData = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: posts,
  };
};
