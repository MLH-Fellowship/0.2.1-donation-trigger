'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TwitterBot = function () {
    /**
     * Create a new TwitterBot instance
     * 
     * Please make sure the required env vars (CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET) are set.
     */
    function TwitterBot() {
        _classCallCheck(this, TwitterBot);

        var consumer_key = process.env.CONSUMER_KEY;
        var consumer_secret = process.env.CONSUMER_SECRET;
        var access_token = process.env.ACCESS_TOKEN;
        var access_token_secret = process.env.ACCESS_TOKEN_SECRET;

        if (!consumer_key || !consumer_secret || !access_token || !access_token_secret) {
            throw new Error('Please make sure all required env vars are set');
        }

        var TwitterAPI = require('twit');

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


    _createClass(TwitterBot, [{
        key: 'like',
        value: function like(id) {
            var _this = this;

            if (typeof id !== 'string' || id === '') {
                throw new Error('ID may not be empty');
            }

            var params = {
                id: id
            };

            return new Promise(function (resolve, reject) {
                _this.bot.post("favorites/create", params, function (err, res) {
                    if (err) return reject(err);
                    resolve(res);
                });
            });
        }

        /**
         * Comment on a tweet (max. 300 comments & retweets / 3h)
         * 
         * @param {String} id The ID of an existing status that the update is in reply to.
         * @param {String} message The text of the status update. URL encode as necessary.
         * @returns {Promise}
         */

    }, {
        key: 'comment',
        value: function comment(id, message) {
            var _this2 = this;

            if (typeof id !== 'string' || id === '') {
                throw new Error('ID may not be empty');
            }

            var params = {
                status: message,
                auto_populate_reply_metadata: true,
                in_reply_to_status_id: id
            };

            return new Promise(function (resolve, reject) {
                _this2.bot.post("statuses/update", params, function (err, res) {
                    if (err) return reject(err);
                    resolve(res);
                });
            });
        }

        /**
         * Retweet a tweet (max. 300 comments & retweets / 3h)
         * 
         * @param {String} id 
         */

    }, {
        key: 'retweet',
        value: function retweet(id) {
            var _this3 = this;

            if (typeof id !== 'string' || id === '') {
                throw new Error('ID may not be empty');
            }

            var params = {
                id: id
            };

            return new Promise(function (resolve, reject) {
                _this3.bot.post("statuses/retweet/:id", params, function (err, res) {
                    if (err) return reject(err);
                    resolve(res);
                });
            });
        }

        /**
         * Filter realtime tweets based on a list of keywords, #hashtags or @mentions
         * 
         * @param {Array} keywords A list of keywords, #hashtags or @mentions
         * @returns {EventEmitter} A stream of tweets
         * 
         * @see https://github.com/ttezel/twit#using-the-streaming-api for a list of events
         */

    }, {
        key: 'filter',
        value: function filter() {
            for (var _len = arguments.length, keywords = Array(_len), _key = 0; _key < _len; _key++) {
                keywords[_key] = arguments[_key];
            }

            return this.bot.stream('statuses/filter', { track: keywords.join(','), stall_warnings: true });
        }
    }]);

    return TwitterBot;
}();

exports.default = TwitterBot;