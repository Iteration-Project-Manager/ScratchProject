const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Set up the express app
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serves all files in the bundle
app.use(express.static(path.join(__dirname, './build')));

// Entry to routes located in ./server/controllers/index.js
require('./server/routes')(app);

function onConnection(socket) {
  console.log('sockets are connected');
  //Waits for drawing emit from main.js THEN broadcasts & emits the data to socket in main.js (line 32)
  socket.on('postProject', (data) => socket.broadcast.emit('postProject'));

  //Waits for cleared emit from canvas.html THEN broadcasts & emits data to socket in canvas.html (line 35)
  socket.on('deleteProject', (data) => socket.broadcast.emit('deleteProject', data));
}

//On initial server connection, socket passed to onConnection function.
io.on('connection', onConnection);

http.listen(port, () => {
  console.log('Listening on port ' + port)
});
