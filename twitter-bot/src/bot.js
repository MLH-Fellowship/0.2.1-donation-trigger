class TwitterBot {
    /**
     * Create a new TwitterBot instance
     * 
     * Please make sure the required env vars (CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET) are set.
     */
    constructor() {
        const consumer_key = process.env.CONSUMER_KEY;
        const consumer_secret = process.env.CONSUMER_SECRET;
        const access_token = process.env.ACCESS_TOKEN;
        const access_token_secret = process.env.ACCESS_TOKEN_SECRET;

        if (!consumer_key || !consumer_secret || !access_token || !access_token_secret) {
            throw new Error('Please make sure all required env vars are set');
        }

        const TwitterAPI = require('twit');

        this.bot = new TwitterAPI({
            consumer_key: consumer_key,
            consumer_secret: consumer_secret,
            access_token: access_token,
            access_token_secret: access_token_secret,
            strictSSL: true
        });
    }

    /**
     * Like a tweet (max. 1000 tweets / 24h)
     * 
     * @param {String} id The ID of an existing status that the update is in reply to.
     * @returns {Promise}
     */
    like(id) {
        if (typeof id !== 'string' || id === '') {
            throw new Error('ID may not be empty');
        }

        const params = {
            id: id,
        };

        return new Promise(
            (resolve, reject) => {
                this.bot.post("favorites/create", params, (err, res) => {
                    if (err) return reject(err)
                    resolve(res)
                });
            }
        );
    }

    /**
     * Comment on a tweet (max. 300 comments & retweets / 3h)
     * 
     * @param {String} id The ID of an existing status that the update is in reply to.
     * @param {String} message The text of the status update. URL encode as necessary.
     * @returns {Promise}
     */
    comment(id, message) {
        if (typeof id !== 'string' || id === '') {
            throw new Error('ID may not be empty');
        }

        const params = {
            status: message,
            auto_populate_reply_metadata: true,
            in_reply_to_status_id: id,
        };

        return new Promise(
            (resolve, reject) => {
                this.bot.post("statuses/update", params, (err, res) => {

                    if (err) return reject(err)
                    resolve(res)
                });
            }
        );
    }

    post(message) {
        const params = {
            status: message
        };

        return new Promise(
            (resolve, reject) => {
                this.bot.post("statuses/update", params, (err, res) => {
                    console.log(err, res)
                    if (err) return reject(err)
                    resolve(res)
                });
            }
        );
    }

    follow(user) {
        const params = {
            screen_name: user
        };

        return new Promise(
            (resolve, reject) => {
                this.bot.post("friendships/create", params, (err, res) => {
                    console.log(err, res)
                    if (err) return reject(err)
                    resolve(res)
                });
            }
        );
    }

    /**
     * Retweet a tweet (max. 300 comments & retweets / 3h)
     * 
     * @param {String} id 
     */
    retweet(id) {
        if (typeof id !== 'string' || id === '') {
            throw new Error('ID may not be empty');
        }

        const params = {
            id: id,
        };

        return new Promise(
            (resolve, reject) => {
                this.bot.post("statuses/retweet/:id", params, (err, res) => {
                    if (err) return reject(err)
                    resolve(res)
                });
            }
        );
    }

    /**
     * Filter realtime tweets based on a list of keywords, #hashtags or @mentions
     * 
     * @param {Array} keywords A list of keywords, #hashtags or @mentions
     * @returns {EventEmitter} A stream of tweets
     * 
     * @see https://github.com/ttezel/twit#using-the-streaming-api for a list of events
     */
    filter(...keywords) {
        return this.bot.stream('statuses/filter', { track: keywords.join(','), stall_warnings: true })
    }
}

module.exports = TwitterBot;