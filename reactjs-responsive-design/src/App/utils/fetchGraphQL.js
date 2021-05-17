async function fetchGraphQL(params, variables) {
    const response = await fetch("/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: params.text,
            variables,
        }),
    });

    return await response.json();
}

export default fetchGraphQL;
