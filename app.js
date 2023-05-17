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
const getdevicesinfo = require('./routs/returndataoutdevices');
const getUserInfo = require('./routs/getuserdata');
const cors = require('cors');
const dbString = require('./routs/dbdata')

const app = express();
const port = 3000;

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    allowedHeaders: 'Content-Type, Authorization'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log('Server is running on port 3000');
    
        app.use(devicesRouter);
        app.use(register);
        app.use(login);
        app.use(changename);
        app.use(createuserdevice);
        app.use(addpower);
        app.use(getDevices);
        app.use(getdevicesinfo);
        app.use(getUserInfo);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });


// //24 houres
// setInterval(saveDeviceDataDaily, 24 * 60 * 60 * 1000);

// //30 days
// setInterval(saveDeviceDataMonthly, 30 * 24 * 60 * 60 * 1000);