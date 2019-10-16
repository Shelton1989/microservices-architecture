'use strict'

// Bootstrap service
const express = require('express');
const app = express();

// Runtime settings
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

// Define endpoints
const routes = require('./api/routes');

routes(app);

app.listen(PORT, () => {
    console.log(`Server started and serving on http://${HOST}:${PORT}` );
});
