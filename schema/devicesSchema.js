const mongoose =  require('mongoose');
const { Schema } = mongoose;

const devicesSchema = new mongoose.Schema({
  name: String,
  userID: String,
  power:{
    type: Number, 
    default: 0
  },
  powerDaily: {
    type: Number, 
    default: 0
  },
  powerMonthly: {
    type: Number, 
    default: 0
  }

});

module.exports = devicesSchema;
