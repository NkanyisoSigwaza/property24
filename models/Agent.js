const mongoose  = require("mongoose");
const Schema = mongoose.Schema;





// create Agent Schema
const AgentSchema = new Schema({

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
  },
  properties:{
    type:[String]   //unique property ID (can also use property name)
  }


});

const Agent = mongoose.model("agent",AgentSchema) // our model to be structured on ninja Schema

module.exports = Agent;
