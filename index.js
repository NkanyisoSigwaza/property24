const express = require("express");
const routes = require("./routes/api");
const app = express();
const mongoose = require("mongoose");

var fs = require("fs");
var Schema = mongoose.Schema;
var multer = require('multer');

const bodyParser = require("body-parser");
const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}
app.use(bodyParser.json());//will pass json data and attatch it to request

 mongoose.connect("mongodb+srv://Nkah:ssssssst@cluster0-rn4rk.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true

})
.then(()=> console.log('Database Connection Successful!!'))
.catch(err => console.error(err));




mongoose.Promise = global.Promise;
app.use("/api",routes);
app.use(multer({ dest: "./uploads/",
 rename: function (fieldname, filename) {
   return filename;
 },
}));  // use multer to take photo and store it to uploads so that we can use it later






// error handeling middleware
app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error:err.message}); // error just a variable  message just a proprty on error
});
// 422 status shows something is wro

app.listen(3000,function(){
  console.log("Listening to port 3000");
});

module.exports = getHashedPassword;
