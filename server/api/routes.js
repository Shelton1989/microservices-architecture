'use strict';

const controller = require('./controller');

module.exports = (app) => {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zip1/:zip2')
        .get(controller.get_distance);
};
