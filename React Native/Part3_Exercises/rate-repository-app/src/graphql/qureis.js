import { gql } from "@apollo/client";

export const GET_RESPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
