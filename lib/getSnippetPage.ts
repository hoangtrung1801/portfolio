const NOTION_API_PAGE_URL = "https://notion-api.splitbee.io/v1/page/";

const getSnippetPage = async (pageId: string) => {
    const url = NOTION_API_PAGE_URL + pageId;
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.NOTION_TOKEN_V2}`
        }
    });
    const snippet = await response.json();
    return snippet;
};

export default getSnippetPage;
