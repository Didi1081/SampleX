var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ProductSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
   
  },
  // `link` is required and of type String
  link: {
    type: String,
  
    
  },


});

// This creates our model from the above schema, using mongoose's model method
var Product = mongoose.model("Product", ProductSchema);

// Export the Article model
module.exports = Product;
