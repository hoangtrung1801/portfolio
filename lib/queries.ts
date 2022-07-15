import siteMetadata from "@/data/siteMetadata";

export const GET_POSTS = `
    query GetUserArticles($page: Int!) {
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
