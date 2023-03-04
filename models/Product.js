const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: { type: String, require: true },
  title: { type: String, require: true },
  slug: { type: String, require: true, unique: true },
  img: { type: String, require: true },
  desc: { type: String, require: true },
  categoty: { type: String, require: true },
  amount: { type: Number, require: true },
  availableQty: { type: Number, require: true },
}, { timestamp: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);