const express = require('express');
const router = express.Router();

const redis = require("redis");

var client;

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', function (req, res) {
    client = redis.createClient({
        retry_strategy: function (options) {
            if (options.error && options.error.code === 'ECONNREFUSED') {
                // End reconnecting on a specific error and flush all commands with
                // a individual error
                return new Error('The server refused the connection');
            }
            if (options.total_retry_time > 1000 * 60 * 60) {
                // End reconnecting after a specific timeout and flush all commands
                // with a individual error
                return new Error('Retry time exhausted');
            }
            if (options.attempt > 10) {
                // End reconnecting with built in error
                return undefined;
            }
            // reconnect after
            return Math.min(options.attempt * 100, 3000);
        }
    });
    let redisKeys = [];
    if(client) {
        client.keys('*', function (err, keys) {
            if (err) return console.log(err);
    
            for (var i = 0, len = keys.length; i < len; i++) {
                redisKeys.push(keys[i]);
            }
        });
        res.json(redisKeys);
    } else {
        res.json([]);
    }
})

router.get('/connect', function (req, res) {
    res.send("Connected");
});

module.exports = router;