import siteMetadata from "@/data/siteMetadata";
import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query GetPosts($page: Int!) {
        user(username: "${siteMetadata.hashnodeUsername}") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug,
                    dateAdded,
                    coverImage
                }
            }
        }
    }
`;
