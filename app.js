const express = require('express');
const mongoose = require('mongoose');
const devicesRouter = require('./routs/devices');
const register = require('./routs/registraion');



const app = express();
const port = 3000;

app.use(devicesRouter);

app.use(register);

app.get('/', (req,res) => {
    res.send('hello hydrospark squad')
})

app.get('/success', (req, res) => {
    res.send('Object created successfully!');
});

app.listen(port, ()=>{
    console.log(`server s on on port ${port}`)
})