const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Device = require('../schema/devicesSchema');
const app = express();

// Use the body-parser middleware to parse request bodies
app.use(bodyParser.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hydrospark');
}

const dev = mongoose.model('Device', Device);

// API endpoint for changing the user ID of a device
app.post('/users/:userId/devices/:deviceId/createuserdevice', async (req, res) => {
  const userId = req.params.userId;
  const deviceId = req.params.deviceId;

  try {
    const device = await dev.findByIdAndUpdate(deviceId, { userID: userId }, { new: true });

    if (!device) {
      return res.status(404).json({ error: 'Device not found' });
    }

    res.json(device);
  } catch (err) {
    console.error('Failed to update device user:', err);
    res.status(500).json({ error: 'Failed to update device user' });
  }
});

module.exports = app;