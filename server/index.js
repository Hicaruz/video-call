const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');

const app = express();

app.use('/', express.static(`${__dirname}/../client/dist`));

const server = http.createServer(app);
server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});
