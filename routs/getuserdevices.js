const express = require('express');
const mongoose = require('mongoose');
const Device = require('../schema/devicesSchema');
const dbstring = require('./dbdata');
const app = express();

const dev = mongoose.model('Device', Device);

// Define the API endpoint
app.get('/devices/:userID/getDevices', async (req, res) => {
  const userID = req.params.userID;

  try {
    // Find all devices with the given userID
    const devices = await dev.find({ userID });

    res.json(devices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve devices' });
  }
});


module.exports = app;