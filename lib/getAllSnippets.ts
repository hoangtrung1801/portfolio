const NOTION_API_DATABASE_URL = "https://notion-api.splitbee.io/v1/table";

const getAllSnippets = async () => {
    const url = `${NOTION_API_DATABASE_URL}/${process.env.NOTION_SNIPPETS_DATABASE_ID}`;
    const response = await fetch(url);
    const snippets = await response.json();
    return snippets;
};

export default getAllSnippets;
