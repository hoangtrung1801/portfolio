import getAllSnippets from "lib/getAllSnippets";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
    snippets: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const snippets = await getAllSnippets();
    res.status(200).json({
        snippets
    });
}
