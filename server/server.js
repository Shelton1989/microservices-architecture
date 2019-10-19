'use strict'

// Bootstrap service
const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const bodyParser = require('body-parser')

// Runtime settings
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8000;

// Define endpoints
const routes = require('./api/routes');

// Define Cross-Origin policy
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json())

routes(app);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('sendComms', (message) => {
        console.log('New message that reads: ' + message.message)
    })
    socket.on('disconnect', () => {
        console.log('A user disconnected.')
    })
});

httpServer.listen(PORT, () => {
    console.log(`Server started and serving on http://${HOST}:${PORT}`);
});
