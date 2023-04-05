const express = require('express');
const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/myDatabase';

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully to MongoDB');
})
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});

const app = express();
const port = 3000;




app.get('/', (req,res) => {
    res.send('hello hydrospark squad')
    res.send(main())
})

app.listen(port, ()=>{
    console.log(`server s on on port ${port}`)
})