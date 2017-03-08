/*var http = require('http');
var express = require('express');
var app = express();
//var port = 8000;
/*var options = {
   host: 'localhost',
   port: '8000',
   path: '/hello-angular'  
};


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content-Type, Accept');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});


app.post(6000, function(req,res){
    res.send('Got a POST request')
});


// Listen on port 8000, IP defaults to 127.0.0.1
//server.listen(port);
//server.listen(options);*/


var express = require('express')
var app = express()

app.post('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(7000, function () {
  console.log('Example app listening on port 6000!')
})
