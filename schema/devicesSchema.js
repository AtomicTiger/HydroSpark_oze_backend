const { Double } = require('mongodb');
const mongoose =  require('mongoose');
const { Schema } = mongoose;

const devicesSchema = new mongoose.Schema({
  name: String,
  userID: String,
  dateOfProduction: Date,
  power:{
    type:mongoose.Types.Decimal128, 
    default: 0
  },
  powerDaily: {
    type:mongoose.Types.Decimal128, 
    default: 0
  },
  powerMonthly: {
    type:mongoose.Types.Decimal128,
    default: 0
  }

});

module.exports = devicesSchema;
