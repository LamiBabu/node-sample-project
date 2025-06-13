const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  city: String,
  age: Number,
});
const MyUser = mongoose.model('User', UserSchema);
module.exports= MyUser