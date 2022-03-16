import * as mongoose from 'mongoose';

export const ConfigSchema = new mongoose.Schema({
  lightOffIn: Number,
});
