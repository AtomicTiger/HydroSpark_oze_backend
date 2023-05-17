const express = require('express');
const mongoose = require('mongoose');
const Device = require('../schema/devicesSchema');
const dbstring = require('./dbdata');
const app = express();



const dev = mongoose.model('Device', Device);
// API endpoint for adding a new device to the "devices" collection
app.post('/devices',async (req, res) => {
  try {
    const newDevice = new dev({name: "Hydrospark", userID: null, dateOfProduction: new Date(),power: 0, powerDaily: 0, powerMonthly: 0})
    console.log(newDevice);
    await newDevice.save()
    res.send("dodano pomyslnie")   
  } catch (err) {
    console.error('Failed to add device to MongoDB:', err);
    res.status(500).json({ error: 'Failed to add device to MongoDB' });
  }
 
});

module.exports = app;