const express = require('express');
const mongoose = require('mongoose');
const User = require('../schema/usersSchema');
const bcrypt = require('bcrypt');
const app = express();


const userAcc = mongoose.model('User', User);

app.get('/getUserData/:userID', async (req, res) => {
    try {
      const { userID } = req.params;
  
      // Fetch user data based on the userID from the database
      const user = await userAcc.findOne({ _id: userID });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // If user exists, return the user data
      res.status(200).json({ email: user.email });
    } catch (err) {
      console.error('Failed to find user:', err);
      res.status(500).json({ error: 'Failed to find user' });
    }
  });

module.exports = app;