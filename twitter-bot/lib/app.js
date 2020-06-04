'use strict';

var _bot = require('./bot.js');

var _bot2 = _interopRequireDefault(_bot);

var _awsExports = require('./aws-exports.js');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _datastore = require('@aws-amplify/datastore');

var _awsAmplify = require('aws-amplify');

var _awsAmplify2 = _interopRequireDefault(_awsAmplify);

var _models = require('./models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

_awsAmplify2.default.configure(_awsExports2.default);

var bot = new _bot2.default();

var donations = {};

/**
 * Track a list of hastags for a given donation id
 * @param {string} donation_uid 
 * @param {Array<string>} keywords
 */
async function track(donation_uid, keywords) {
    var _donation$tracking;

    var donation = donations[donation_uid] || {
        count: 0,
        tracking: []
    };

    (_donation$tracking = donation.tracking).push.apply(_donation$tracking, _toConsumableArray(keywords));
    var stream = bot.filter.apply(bot, _toConsumableArray(keywords));

    stream.on('tweet', function (_) {
        donation.count++;
        console.log(donation.count, keywords);
    });

    donation.stream = stream;

    donations[donation_uid] = donation;
}

var subscription = _datastore.DataStore.observe(_models.Donation).subscribe(function (msg) {
    console.log(msg.model, msg.opType, msg.element);
});

// app.use(express.json());

// app.get('/', (req, res) => {
//     const props = {};

//     for (property in donations) {
//         props[property] = {
//             numberOfCalls: donations[property].count,
//             keywords: donations[property].tracking,
//         }
//     }

//     res.send(props)
// })

// app.post('/:uid', (req, res) => {
//     track(req.params.uid, req.body.keywords)

//     res.sendStatus(201)
// });

// app.delete('/:uid', (req, res) => {
//     if (donations[req.params.uid]) {
//         donations[req.params.uid].stream.stop()
//         delete donations[req.params.uid]
//     }

//     res.sendStatus(204)
// });


// app.listen(80)