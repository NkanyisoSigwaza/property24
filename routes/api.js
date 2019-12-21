const express = require("express");

const router = express.Router();

const Property = require("../models/Property");






router.get("/getProperty",function(req,res){
  res.send("get property");
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
