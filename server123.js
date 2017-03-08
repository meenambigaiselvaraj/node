
/*var operators = require('operators')
var add = require('add');
var sub = require('sub');
var mul = require('mul');
var div = require('div');   */
var express = require('express');
var app = express();
//var app1= operators();
let port = "4000";
let host = "127.0.0.1";
app.use(express.static('node'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
    //console.log(req.params.action);
      var a= req.query.num1;
      var b= req.query.num2;
     // console.log(a);
      // var c=  req.query.ao;
     //  console.log(c);

 /*switch (c) {
        case "add" :
            var ans= parseInt(a) + parseInt(b);
             res.end(JSON.stringify(ans));
             break;
        case "sub":
            var ans= parseInt(a) - parseInt(b);
             res.end(JSON.stringify(ans));
             break;
        case "mul":
            var ans= parseInt(a) * parseInt(b);
             res.end(JSON.stringify(ans));
             break;
        case "div":
            var ans= parseInt(a) / parseInt(b);
             res.end(JSON.stringify(ans));
             break;
    }

})*/
      var x=  req.query.add;
      var d=  req.query.sub;
      var e=  req.query.mul;
      var f=  req.query.div;
     // var value = req.query.op;

        if( x){
             var ans= parseInt(a) + parseInt(b);
             res.end(JSON.stringify(ans));
        }
        else if(d){
            var ans= parseInt(a) - parseInt(b);
             res.end(JSON.stringify(ans));
        }
        else if( e){
             var ans= parseInt(a) * parseInt(b);
             res.end(JSON.stringify(ans));
        }
        else{
           var ans= parseInt(a) / parseInt(b);
             res.end(JSON.stringify(ans));  
        }   
})
      

      
var server = app.listen(port, function () {
  // var host = server.address().address;
  // var port = server.address().port;
   console.log("app listening at http://%s:%s", host, port);

})