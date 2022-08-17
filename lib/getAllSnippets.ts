const NOTION_API_DATABASE_URL = "https://notion-api.splitbee.io/v1/table/";

const getAllSnippets = async () => {
    const url = NOTION_API_DATABASE_URL + "38e89b1f15244ae89ade1ce56cab2f32";
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.NOTION_TOKEN_V2}`
        }
    });
    const snippets = await response.json();
    return snippets;
};

export default getAllSnippets;
