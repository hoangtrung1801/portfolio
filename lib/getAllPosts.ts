import client from "./apollo-client";
import { GET_POSTS } from "./queries";

const getAllPosts = async () => {
    // const result = await gql(GET_POSTS, { page: 0 });
    // const posts = result.data.user.publication.posts;

    // return posts;
    const { data } = await client.query({
        query: GET_POSTS,
        variables: {
            page: 0
        }
    });
    return data.user.publication.posts;
};

export default getAllPosts;
