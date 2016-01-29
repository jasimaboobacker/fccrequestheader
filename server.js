var express = require("express");

var app = express();

app.get('/',function(req,res){
  console.log("Hello World");
  res.json({"ipaddress":req.headers['x-forwarded-for'],
    "language":req.headers['accept-language'].split(',')[0],
    "software":req.headers['user-agent'].match(/\((.*?)\)/)[1]
  });
});

app.listen(process.env.PORT||8080);
