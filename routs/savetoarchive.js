const mongoose = require('mongoose');
const Device = require('../schema/devicesSchema');
const Archive = require('../schema/archiveScheam');

async function saveDeviceDataDaily() {
  try {
    // Get all devices
    const devices = await Device.find();

    // Save data for each device
    for (const device of devices) {
      const { _id, userID, power, powerDaily, powerMonthly } = device;

      // Get current date and time
      const currentDate = new Date();

      // Create archive object to save device data
      const archiveData = new Archive({
        deviceID: _id,
        userID,
        date: currentDate,
        power,
        powerDaily,
        powerMonthly
      });

      // Save archive object to the database
      await archiveData.save();

      // Update the device's lastUpdate field with the current date and time
      device.lastUpdate = currentDate;

      // Set the device's powerDaily and powerMonthly fields to 0
      device.powerDaily = 0;
      device.powerMonthly = 0;

      // Save the updated device object to the database
      await device.save();
    }

    console.log('Device data saved successfully');
  } catch (error) {
    console.error('Failed to save device data:', error);
  }
}
async function saveDeviceDataMonthly() {
    try {
      // Get all devices
      const devices = await Device.find();
  
      // Save data for each device
      for (const device of devices) {
        const { _id, userID, power, powerDaily, powerMonthly } = device;
  
        // Get current date and time
        const currentDate = new Date();
  
        // Create archive object to save device data
        const archiveData = new Archive({
          deviceID: _id,
          userID,
          date: currentDate,
          power,
          powerMonthly
        });
  
        // Save archive object to the database
        await archiveData.save();
  
        // Update the device's lastUpdate field with the current date and time
        device.lastUpdate = currentDate;
  
        // Set the device's powerDaily and powerMonthly fields to 0
        device.powerMonthly = 0;
  
        // Save the updated device object to the database
        await device.save();
      }
  
      console.log('Device data saved successfully');
    } catch (error) {
      console.error('Failed to save device data:', error);
    }
  }
  

module.exports = {
    saveDeviceDataDaily,
    saveDeviceDataMonthly
};