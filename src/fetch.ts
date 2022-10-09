interface ShowMeFetchProps {
    url: string;
    method: 'GET' | 'POST';
    body?: object;
}

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export const showMeFetch = async ({url, method, body}: ShowMeFetchProps) => {
    return await fetch(url ,{
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined
    }).then(async (r) => ({
        body: await r.json(),
        status: r.status
    }))
}