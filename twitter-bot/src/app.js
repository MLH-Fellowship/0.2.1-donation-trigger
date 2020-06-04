
import Twitter from './bot.js';
import awsconfig from './aws-exports.js';
import { DataStore } from '@aws-amplify/datastore';
import Amplify from 'aws-amplify';
import { Donation } from './models';

Amplify.configure(awsconfig);

const bot = new Twitter();

const donations = {};

/**
 * Track a list of hastags for a given donation id
 * @param {string} donation_uid 
 * @param {Array<string>} keywords
 */
async function track(donation_uid, keywords) {
    let donation = donations[donation_uid] || {
        count: 0,
        tracking: [],
    };

    donation.tracking.push(...keywords)
    const stream = bot.filter(...keywords)

    stream.on('tweet', (_) => {
        donation.count++;
        console.log(donation.count, keywords)
    })

    donation.stream = stream;

    donations[donation_uid] = donation;
}

const subscription = DataStore.observe(Donation).subscribe(msg => {
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