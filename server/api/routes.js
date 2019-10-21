'use strict';

const controller = require('./controller');

module.exports = (app) => {
    app.route('/').
        get((req, res) => {
            res.send(`<h1>Test</h1>`)
        });
    app.route('/message/')
        .post(controller.message);
    app.route('/get-alerts/')
        .get(controller.get_alerts);
};
