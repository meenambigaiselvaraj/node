var http = require('http');
var express = require('express');
var app = express();
var option = {
   host: 'localhost',
   port: '8000',
   path: '/calculation'  
};

var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content-Type, Accept');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.send(a);
  response.send(b);
});

server.listen(option);