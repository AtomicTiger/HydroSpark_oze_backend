const express = require('express');
const mongoose = require('mongoose');
const Device = require('../schema/devicesSchema');
const { Db } = require('mongodb');
const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hydrospark');
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const dev = mongoose.model('Device', Device);
// API endpoint for adding a new device to the "devices" collection
app.get('/devices',async (req, res) => {
  try {
    const newDevice = new dev({name: "Hydrospark", userID: null, power: 0})
    console.log(newDevice);
    await newDevice.save()
    res.redirect('/success')    
  } catch (err) {
    console.error('Failed to add device to MongoDB:', err);
    res.status(500).json({ error: 'Failed to add device to MongoDB' });
  }
 
});

module.exports = app;