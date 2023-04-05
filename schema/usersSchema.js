const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types .UUID, // String is shorthand for {type: String}
  name: String,

});

module.exports = userSchema;
