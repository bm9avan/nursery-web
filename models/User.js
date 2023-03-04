const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true }
}, { timestamp: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);