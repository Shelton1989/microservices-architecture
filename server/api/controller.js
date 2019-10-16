'use strict';

const properties = require('../package.json');
const distance = require('../service/distance');

const controllers = {
    about: (req, res) => {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        };
        res.json(aboutInfo);
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