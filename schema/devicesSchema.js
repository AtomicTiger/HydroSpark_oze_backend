const { Double } = require('mongodb');
const mongoose =  require('mongoose');
require('mongoose-double')(mongoose);
const { Schema } = mongoose;
var SchemaTypes = mongoose.Schema.Types;
const devicesSchema = new mongoose.Schema({
  name: String,
  userID: String,
  dateOfProduction: Date,
  power:{
    type: SchemaTypes.Double, 
    default: 0
  },
  powerDaily: {
    type: SchemaTypes.Double, 
    default: 0
  },
  powerMonthly: {
    type: SchemaTypes.Double,
    default: 0
  }

});

module.exports = devicesSchema;
