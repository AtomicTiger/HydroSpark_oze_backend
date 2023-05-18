const { Double } = require('mongodb');
const mongoose =  require('mongoose');
const { Schema } = mongoose;

const devicesSchema = new mongoose.Schema({
  name: String,
  userID: String,
  dateOfProduction: Date,
  power:{
    type: Double, 
    default: 0
  },
  powerDaily: {
    type: Double, 
    default: 0
  },
  powerMonthly: {
    type: Double, 
    default: 0
  }

});

module.exports = devicesSchema;
