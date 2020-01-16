const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const Agent = require("./models/agent");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine","ejs");

mongoose.connect("mongodb+srv://Nkah:ssssssst@cluster0-rn4rk.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Database Connection Successful!!'))
.catch(err => console.error(err));


mongoose.Promise = global.Promise;



app.get("/signup",function(req,res){
  res.render("signup");
});

app.get("/eg",function(req,res){
  res.render("eg");
});

app.post("/eg",urlencodedParser,function(req,res,next){

    if(req.body.password == req.body.Cpassword){

    Agent.create(req.body).then(function(ninja){

      //res.send(ninja);  // once new ninja has been succesfully added to the database
      console.log(ninja);


    }).catch(next);   // for error handeling if ninja.create fails program will jump to next midle weae

    res.render("signin");
  }
  else{
    res.send("passwords do not match");
  }







});  // /api/ninjas
app.post("/profile",urlencodedParser,function(req,res,next){

      console.log(req.body.password);
      Agent.findOne({email:req.body.email}).then(function(agent){    // returns updated ninja
        console.log(agent.password);
        console.log("yeah");
        if(agent.password == req.body.password){
          res.render("profile",{agent:agent});
        }
        else{
          res.send("incorrect password");
        }
      }).catch(next);
``



});
/*app.post("/eg",urlencodedParser,function(req,res){
  console.log(req.body);
  res.send(req.body);
});*/

app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send("Incorrect UserName"); // error just a variable  message just a proprty on error
});
// 422 status shows something is wrong


app.listen(3000,function(){
  console.log("Now Lisening to port 3000");
});
