//express server on 3000
var express = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));
console.log("My socket server is running");


//install express and socket.io
var socket = require('socket.io');
//socket server
var io = socket(server);
io.sockets.on('connection', newConnection);