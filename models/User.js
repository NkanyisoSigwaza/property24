const mongoose  = require("mongoose");
const Schema = mongoose.Schema;





// create property Schema
const UserSchema = new Schema({

  name:{

    type:String,
    required:[true,"Name field is required"]
  },
  email:{

    type:String,
    required:[true,"Email field is required"]
  },
  password:{
    type:String,
    required:[true,"Password field is required"]
  }
  // picture
  // area square meters

});

const User = mongoose.model("user",UserSchema) // our model to be structured on ninja Schema

module.exports = User;
