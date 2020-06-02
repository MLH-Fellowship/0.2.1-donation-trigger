// Load API key and secret
require('dotenv').config();


const fetch = require('node-fetch');


async function authorizeOAuth2() {
    const auth = Buffer.from(process.env.TWITTER_KEY + ':' + process.env.TWITTER_SECRET).toString('base64');

    const res = await fetch(`https://api.twitter.com/oauth2/token`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${auth}`
        },
        body: 'grant_type=client_credentials',
    });

    const data = await res.json()

    return data.access_token;
}

async function search(token, query) {
    const response = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    const body = await response.json();

    console.dir(body.statuses);
}

(async () => {
    let token;

    try {
        token = await authorizeOAuth2();
    } catch (e) {
        console.error(`Could not generate a Bearer token. Please check that your credentials are correct. (${e})`);
        process.exit(1);
    }

    search(token, '#MLHFellowship');
})();