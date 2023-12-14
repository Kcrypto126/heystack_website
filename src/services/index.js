import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            title
            summary
            slug
            coverImage {
              url
            }
            content {
              json
            }
            author {
              id
              linkedIn
              name
              twitter
            }
            createdAt
            featuredPost
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result?.postsConnection?.edges;
};
