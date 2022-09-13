import { Client } from "@notionhq/client";
import {
    PageObjectResponse,
    PartialPageObjectResponse
} from "@notionhq/client/build/src/api-endpoints";

const convertToSnippetList = async (
    snippets: Array<PageObjectResponse | PartialPageObjectResponse>
) => {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN
    });

    snippets.forEach(async (page: PageObjectResponse) => {
        let propertyValue = [];
        Object.keys(page.properties).forEach(async (property) => {
            const propertyId = page.properties[property].id;
            const propertyResponse = await notion.pages.properties.retrieve({
                page_id: page.id,
                property_id: propertyId
            });
        });
        // notion.pages.properties.retrieve({
        //     page_id: page.id,
        // })
    });
};

export default convertToSnippetList;
