export default async function gql(query, variables = {}) {
    const data = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
}
