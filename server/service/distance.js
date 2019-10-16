const request = require('request');

const apiKey = 'TXHOB9KOo2YMEzdkGnowInR0q0Ywkmz9Zb1QagR2aI6e0QBuRFtCxO78BUwrqBCZ';

const URL = 'https://www.zipcodeapi.com/rest/';

const distance = {
    find: (req, res, next) => {
        request(URL + apiKey + '/distance.json/' + req.params.zip1 + '/' + req.params.zip2 + '/mile', 
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                response = JSON.parse(body);
                res.send(response)
            } else {
                console.log(response.statusCode + response.body);
                res.send({ distance: -1 })
            }
        })
    }
};

module.exports = distance;