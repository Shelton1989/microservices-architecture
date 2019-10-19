'use strict';

const distance = require('../service/distance');

const controllers = {
    message: (req, res) => {
        console.log(req.body)
        const response = {
            message: "This is a successful response",
        };
        res.json(response);
    },

    get_distance: (req, res) => {
        distance.find(req, res, (err, dist) => {
            if (err) {
                res.send(err);
            };
            res.json(dist);
        });
    },
};

module.exports = controllers;

// appkey: TXHOB9KOo2YMEzdkGnowInR0q0Ywkmz9Zb1QagR2aI6e0QBuRFtCxO78BUwrqBCZ