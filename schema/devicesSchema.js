const { Int32 } = require('mongodb');
const mongoose =  require('mongoose');
const { Schema } = mongoose;

const devicesSchema = new mongoose.Schema({
  name: String,
  userID: String,
  power: Number,
});

module.exports = devicesSchema;
