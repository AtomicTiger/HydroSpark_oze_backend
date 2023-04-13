const mongoose =  require('mongoose');
const { Schema } = mongoose;

const devicesSchema = new mongoose.Schema({
    deviceID: String,
    userID: String,
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
