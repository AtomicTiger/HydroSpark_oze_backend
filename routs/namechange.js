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

// API endpoint for changing the name of a device
app.post('/changename', async (req, res) => {
  const id = req.body.id;
  const newName = req.body.name;

  try {
    const device = await dev.findByIdAndUpdate(id, { name: newName }, { new: true });

    if (!device) {
      return res.status(404).json({ error: 'Device not found' });
    }

    res.json(device);
  } catch (err) {
    console.error('Failed to update device name:', err);
    res.status(500).json({ error: 'Failed to update device name' });
  }
});

module.exports = app;