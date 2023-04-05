import { Int32 } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Schema.Types .UUID, // String is shorthand for {type: String}
  name: String,

});

export default userSchema;
