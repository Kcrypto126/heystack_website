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
            id
            twitter
            linkedIn
            photo {
              url
            }
          }
          date
          categories {
            name
            slug
          }
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

export const GET_TAGS = gql`
  query GET_TAGS {
    categories {
      name
      slug
    }
  }
`;

export const GET_POST_FOR_TAG = gql`
  query GetCategoryPost($slug: String!) {
    postsConnection(where: { categories_some: { slug: $slug } }) {
      edges {
        cursor
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          summary
          coverImage {
            url
          }
          categories {
            name
            slug
          }
          date
        }
      }
    }
  }
`;
