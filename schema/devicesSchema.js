const mongoose =  require('mongoose');
const { Schema } = mongoose;

const devicesSchema = new mongoose.Schema({
  name: String,
  userID: Number,
  power: Number,
  powerdaily: Number,
  powerMonthly: Number,

});

module.exports = devicesSchema;
