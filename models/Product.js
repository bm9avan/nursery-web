const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId:{type:String, require:true},
  title:{type:String,require:true},
  slug:{type:String,require:true},
  img:{type:String,require:true},
  desc:{type:String,require:true},
  categoty:{type:String,require:true},
  amount:{type:Number,require:true},
  availableQty:{type:Number,require:true},
},{timestamp:true});

mongoose.models={}

// const ProductModel = mongoose.model('Product',ProductSchema);
// module.exports = ProductModel;

export default mongoose.model("Product",ProductSchema);