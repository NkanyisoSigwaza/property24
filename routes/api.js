const express = require("express");

const app = express();

const bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine","ejs");


app.get("/signup",function(req,res){
  res.render("signup");
});

app.post("/eg",urlencodedParser,function(req,res){
  console.log(req.body);
  res.send(req.body);
});

/*router.get("/eg",function(req,res){
  res.send("get req");
});*/



module.exports = app;
