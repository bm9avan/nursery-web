const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  products: [{
    productId: { type: String, require: true },
    quntity: { type: Number, default: 1 }
  }],
  address: { type: String, require: true },
  amount: { type: Number, require: true },
  paymentStatus: { type: Boolean, default: false, require: true }
}, { timestamp: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);