import gql from "lib/gql";
import { GET_POSTS } from "lib/queries";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await gql(GET_POSTS, { page: 0 });
    if (!result) res.status(400).json({ error: "error" });

    const posts = result.data.user.publication.posts;
    res.status(200).json({ data: posts });
}
