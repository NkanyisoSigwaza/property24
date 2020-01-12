const express = require("express");

const router = express.Router();

const Property = require("../models/Property");

const User = require("../models/User");

const Agent = require("../models/Agent");

const client = require("../index");

router.get("/userRegistration",function(req,res){
  res.send("You are about to register, user!");
});

router.get("/AgentRegistration",function(req,res){
  res.send("You are about to register, Agent!");
});


router.post("/getProperty",function(req,res){
  res.send("requested properties");

});

router.post("/userRegistration",function(req,res){
  User.create(req.body).then(function(user){
    console.log(user);
    res.send(user);

  });
});

router.post("/userLogin",function(req,res){
  User.findOne({email:req.body.email}).then(function(user){    // returns updated ninja
    if(user){
      if (user.password===req.body.password){
        res.send(user);
      }
      else{
        res.send("Incorrect password!");
      }

    }
    else{
      res.send("You are not registered!");
    }

  });
});


router.post("/AgentRegistration",function(req,res){
  Agent.create(req.body).then(function(agent){
    console.log(agent);
    res.send(agent);

  });
});

router.post("/agentLogin",function(req,res){
  Agent.findOne({email:req.body.email}).then(function(agent){    // returns updated ninja
    if(agent){
      if (agent.password===req.body.password){
        res.send(agent);
      }
      else{
        res.send("Incorrect password!");
      }

    }
    else{
      res.send("Agent not registered!");
    }

  });
});

router.post("/addProperty",function(req,res,next){
  //res.send(req.body);
  Property.create(req.body).then(function(property){

    res.send(property);  // once new ninja has been succesfully added to the database

  }).catch(next);   // for error handeling if ninja.create fails program will jump to next midle weae



});

router.put("/updateProperty/:id",function(req,res){

  Property.findByIdAndUpdate({_id:req.params.id},req.body).then(function(property){

    Property.findOne({_id:req.params.id}).then(function(property){    // returns updated property

      res.send(property);
})
});


});

router.delete("/deleteProperty/:id",function(req,res){

  Property.findByIdAndRemove({_id:req.params.id}).then(function(property){

    res.send(property); //pass id of object you want to delete at end of url
});

});

module.exports = router;
