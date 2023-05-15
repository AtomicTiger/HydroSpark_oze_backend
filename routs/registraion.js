const express = require('express');
const mongoose = require('mongoose');
const User = require('../schema/usersSchema');
const app = express();
const bcrypt = require('bcrypt');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hydrospark');
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userAcc = mongoose.model('User', User);

app.post('/register',async (req, res) => {
  try {
    let emailVar = req.body.email;
    let reppasswordVar = req.body.reppassword;
    let passwordVar = req.body.password;
    // generate salt
    const salt = await bcrypt.genSalt(10);
    // hash the password
    const hashedPassword = await bcrypt.hash(passwordVar, salt);
    const newUser = new userAcc({
      email: emailVar,
      password: hashedPassword
    })
    console.log(newUser);
    if(reppasswordVar == passwordVar){
      await newUser.save()
    }else{
      res.redirect('localhost:3001/login?');
    }   
  } catch (err) {
    console.error('Failed to add user:', err);
    res.status(500).json({ error: 'Failed to add device to MongoDB' });
  }
 
});

module.exports = app;