const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId:{type:String, require:true},
  email:{type:String,require:true},
  password:{type:String,require:true}
},{timestamp:true});

mongoose.model={}
export default mongoose.model("User",UserSchema);