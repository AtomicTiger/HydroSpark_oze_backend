const express = require('express');
const mongoose = require('mongoose');
const Device = require('../schema/devicesSchema');
const { json } = require('body-parser');
const dbstring = require('./dbdata');
const app = express();

const dev = mongoose.model('Device', Device);

// Define the API endpoint
app.get('/devices/:userID/getdevicesinfo', async (req, res) => {
  const user_id = req.params.userID;
  try {
    // Find all devices with the given userIDs
    const devices = await dev.find({ 'userID' : user_id });

    console.log(devices);

    return res.json(devices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve devices' });
  }
});


module.exports = app;