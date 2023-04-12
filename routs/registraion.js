const express = require('express');
const mongoose = require('mongoose');
const User = require('../schema/usersSchema');
const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hydrospark');
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userAcc = mongoose.model('User', User);

app.post('/register',async (req, res) => {
  try {
    let emailVar = req.body.email;
    let nameVar = req.body.name;
    let passwordVar = req.body.password;
    const newUser = new userAcc({
      email: emailVar,
      name: nameVar,
      password: passwordVar

    })
    console.log(newUser);
    await newUser.save()
    res.redirect('/success')    
  } catch (err) {
    console.error('Failed to add user:', err);
    res.status(500).json({ error: 'Failed to add device to MongoDB' });
  }
 
});

module.exports = app;