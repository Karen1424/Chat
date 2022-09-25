/// Standard requires
const express = require('express');
const http = require('http');
require('dotenv').config({path: '../.env'});
/// Local requires
const router = require('./controller/messageController');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');

/// Use static files
app.use(express.static(path.join(__dirname,'./public')));

/// Routes
app.use('/id', router);

let name;

io.on('connection', (socket) => {
  console.log('new user connected');
  
  socket.on('joining msg', (username) => {
  	name = username;
    console.log(username);
  	io.emit('chat message', `---${name} joined the chat---`);
    console.log('message');
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    console.log(name);
    io.emit('chat message', `---${name} left the chat---`);
    
  });

  socket.on('chat message', (msg) => {
    console.log(msg);
    socket.broadcast.emit('chat message', msg);         //sending message to all except the sender
  });

});

/// Server Listrinig
const PORT = process.env.SOCKETPORT;
server.listen(PORT, () => console.log(`Server has been started on PORT ${PORT}`));