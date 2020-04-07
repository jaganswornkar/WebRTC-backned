const path = require('path');
const express = require('express');
const https = require('http');

const app = express();
const PORT = 3000;
const SignalServer = require('./SignalServer');


// Adding in a express server to HTTPS to allow HTTPS
const server = https.createServer(app);

// WEBSOCKET SECURED CONNECTION //
// const wss = new WebSocket.Server({ server });
const signal = new SignalServer({ server });
signal.connect();
// const wss = new WebSocket.Server({ port: PORT });

server.listen(PORT, () => {
  console.log('\nListening on PORT: ', PORT);
});
