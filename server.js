var express = require("express");

var app = express();

app.get('/',function(req,res){
  console.log("Hello World");
  res.json({"hello":"World"});
});

app.listen(process.env.PORT||8080);
