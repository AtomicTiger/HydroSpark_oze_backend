const express = require('express');
const mongoose = require('mongoose');
const devicesRouter = require('./routs/devices');
const register = require('./routs/registraion');
const login = require('./routs/login');
const bodyParser = require('body-parser');
const changename = require('./routs/namechange');
const createuserdevice = require('./routs/createuserdevice');
const addpower = require('./routs/addpowertodevice')
const {saveDeviceDataDaily, saveDeviceDataMonthly}  = require('./routs/savetoarchive');
const getDevices = require('./routs/getuserdevices')

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use(devicesRouter);

app.use(register);

app.use(login);

app.use(changename);

app.use(createuserdevice);

app.use(addpower);

app.use(getDevices);

app.get('/', (req,res) => {
    res.send('hello hydrospark squad')
})

app.get('/success', (req, res) => {
    res.send('Object created successfully!');
});

app.listen(port, ()=>{
    console.log(`server s on on port ${port}`)
})


// //24 houres
// setInterval(saveDeviceDataDaily, 24 * 60 * 60 * 1000);

// //30 days
// setInterval(saveDeviceDataMonthly, 30 * 24 * 60 * 60 * 1000);