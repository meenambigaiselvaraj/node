var express = require('express');
var app = express();
let port = "3000";
let host = "127.0.0.1";
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
      var a= req.query.num1;
      var b= req.query.num2;
      var c= parseInt(a) + parseInt(b);
   res.end(JSON.stringify(c));
})


var server = app.listen(port, function () {
  // var host = server.address().address;
  // var port = server.address().port;
   console.log("app listening at http://%s:%s", host, port);

})