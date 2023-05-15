const express = require('express');
const mongoose = require('mongoose');
const User = require('../schema/usersSchema');
const app = express();
const bcrypt = require('bcrypt');

const userAcc = mongoose.model('User', User);

app.post('/register', async (req, res) => {
  try {
    let emailVar = req.body.email;
    let reppasswordVar = req.body.reppassword;
    let passwordVar = req.body.password;

    console.log(emailVar, reppasswordVar, passwordVar); // Check if passwordVar has a value

    if (!passwordVar) {
      // Handle the case when passwordVar is undefined or empty
      return res.status(400).json({ error: 'Password is required' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passwordVar, salt);

    const newUser = new userAcc({
      email: emailVar,
      password: hashedPassword
    });

    console.log(newUser);

    if (reppasswordVar == passwordVar) {
      await newUser.save();
    } else {
      res.redirect('localhost:3001/login?');
    }
  } catch (err) {
    console.error('Failed to add user:', err);
    res.status(500).json({ error: 'Failed to add user to MongoDB' });
  }
});

module.exports = app;