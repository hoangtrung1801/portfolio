import siteMetadata from "@/data/siteMetadata";
import client from "./apollo-client";
import { GET_POSTS, GET_POST_DETAILED } from "./queries";

const getAllPosts = async () => {
    let allPosts = [];
    let numPages = 0;
    let maxPages = 0;

    while (numPages <= maxPages) {
        const { data } = await client.query({
            query: GET_POSTS,
            variables: {
                page: numPages,
                username: siteMetadata.hashnodeUsername
            }
        });
        allPosts.push(...data.user.publication.posts);
        const numPosts = data.user.numPosts;
        maxPages = numPosts / 6 + (numPosts % 6 > 0 ? 0 : -1);

        numPages++;
    }

    return await Promise.all(
        allPosts.map(async (post) => {
            const { data: postDetailed } = await client.query({
                query: GET_POST_DETAILED,
                variables: {
                    slug: post.slug,
                    hostname: siteMetadata.hashnodeUsername
                }
            });
            return {
                ...post,
                tags: postDetailed.post.tags
            };
        })
    );
};

export default getAllPosts;
