const express = require('express');
const mongoose = require('mongoose');
const User = require('../schema/usersSchema');
const bcrypt = require('bcrypt');
const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hydrospark');
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userAcc = mongoose.model('User', User);

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // find user in database
      const user = await userAcc.findOne({ email });
  
      if (!user) {
        // if user not found
        return res.status(404).json({ error: 'User not found' });
      }
  
      // compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        // if passwords don't match
        return res.status(401).json({ error: 'Incorrect password' });
      }
  
      // if user exists and passwords match
      res.send('You are in ');
    } catch (err) {
      console.error('Failed to login:', err);
      res.status(500).json({ error: 'Failed to login' });
    }
  });

module.exports = app;