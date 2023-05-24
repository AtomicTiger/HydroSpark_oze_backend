const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Device = require('../schema/devicesSchema');
const dbstring = require('./dbdata');
const app = express();

// Use the body-parser middleware to parse request bodies
app.use(bodyParser.json());

const dev = mongoose.model('Device', Device);

// API endpoint for changing the user ID of a device
app.post('/devices/:deviceId/power/:power', async (req, res) => {
  const powerValue =  parseFloat(req.params.power);
  const deviceId = req.params.deviceId;

  try {
    const device = await dev.findByIdAndUpdate(deviceId, {
        $inc: { 
          power: powerValue, 
          powerDaily: powerValue, 
          powerMonthly: powerValue 
        }
      }, { new: true });

      if (!device) {
        return res.status(404).json({ error: 'Device not found' });
      }
  
      res.json(device);
    } catch (err) {
      console.error('Failed to update device power:', err);
      res.status(500).json({ error: 'Failed to update device power' });
    }
  });

module.exports = app;