import gql from "graphql-tag";

export const GET_ALL_POST = gql`
  query GET_ALL_POST {
    postsConnection(orderBy: createdAt_DESC) {
      edges {
        cursor
        node {
          title
          slug
          coverImage {
            url
          }
          summary
          author {
            name
            photo {
              url
            }
          }
          date
        }
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query GET_SINGLE_POST($slug: String!) {
    post(where: { slug: $slug }) {
      title
      summary
      id
      createdAt
      coverImage {
        url(transformation: { image: { resize: { height: 768, width: 1366 } } })
      }
      content {
        json
      }
      author {
        id
        linkedIn
        twitter
        name
        photo {
          url
        }
      }
      date
    }
  }
`;
