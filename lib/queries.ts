import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query GetPosts($page: Int!, $username: String!) {
        user(username: $username) {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    dateAdded
                    coverImage
                }
            }
            numPosts
        }
    }
`;

export const GET_POST_DETAILED = gql`
    query GetPostDetailed($slug: String!, $hostname: String) {
        post(slug: $slug, hostname: $hostname) {
            _id
            slug
            title
            tags {
                name
            }
        }
    }
`;
