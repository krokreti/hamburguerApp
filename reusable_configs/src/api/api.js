const baseUrl = 'https://api.coindesk.com/v1/';
const token = 'authentication';

class API {
    async get({ url }) {
        const request = await fetch(baseUrl + url);
        const response = await request.json();
        return response;
    }

    async post({ url, body, authorization }) {
        const request = await fetch(baseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization ? `Bearer ${token}` : '',
            },
            body: JSON.stringify(body),
        });
        const response = await request.json();
        return response;
    }

    async patch({ url, body, authorization }) {
        const request = await fetch(baseUrl + url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization ? `Bearer ${token}` : '',
            },
            body: JSON.stringify(body),
        });
        const response = await request.json();
        return response;
    }

    async delete({ url, authorization }) {
        const request = await fetch(baseUrl + url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization ? `Bearer ${token}` : '',
            },
        });
        const response = await request.json();
        return response;
    }

}

const api = new API();

export default api;

// const request = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
