'use strict';

const pool = require('../service/db')

const controllers = {
    message: (req, res) => {
        const date = new Date()
        const { first_name, last_name, message, email, location } = req.body
        pool.query(`INSERT INTO requests (
            first_name, 
            last_name, 
            message, 
            email,
            location,
            created_at
        ) VALUES ($1, $2, $3, $4, $5, $6 )`, [first_name, last_name, message, email, location, date], (err, results) => {
            if (err) {
                res.status(400).send(`Bad request ${err}`)
            }

            const response = {
                message: "We have recieved your SOS. Help is on the way.",
            };

            res.status(201).json(response)
        })
    },

    get_alerts: (req, res) => {
        let response
        pool.query('SELECT * FROM requests ORDER BY created_at DESC', (err, results) => {
            if (err) {
                res.status(400).send(`Bad request ${err}`)
            }
            response = results.rows

            res.status(200).json(response)
        })
    },
};

module.exports = controllers;