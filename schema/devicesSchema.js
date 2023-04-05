import { Int32 } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const devicesSchema = new Schema({
  _id: Schema.Types.UUID, // String is shorthand for {type: String}
  name: String,
  userID: Int32,
  power: Float32Array,

});

export default devicesSchema;
