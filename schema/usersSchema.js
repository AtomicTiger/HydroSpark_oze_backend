const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  name: String,
  password:String
});

module.exports = userSchema;
