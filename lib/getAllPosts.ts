import gql from "./gql";
import { GET_POSTS } from "./queries";

const getAllPosts = async () => {
    const result = await gql(GET_POSTS, { page: 0 });
    const posts = result.data.user.publication.posts;

    return posts;
};

export default getAllPosts;
