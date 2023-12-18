import { useSuspenseQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "./queries";

export const fetchPostData = ({ path }) => {
  const { loading, error, data } = useSuspenseQuery(GET_SINGLE_POST, {
    variables: { slug: path },
  });

  return { loading, error, data };
};
