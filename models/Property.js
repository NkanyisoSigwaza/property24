

// create property Schema
const PropertySchema = new Schema({

  name:{

    type:String,
    required:[true,"Name field is required"]
  },
  address:{

    type:String,
    required:[true,"Adress field is required"]
  },
  price:{
    type:String,
    required:[true,"Adress field is required"]
  }

});

const Property = mongoose.model("property",PropertySchema) // our model to be structured on ninja Schema

module.exports = Property;
