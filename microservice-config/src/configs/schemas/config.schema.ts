import * as mongoose from 'mongoose';

export const ConfigSchema = new mongoose.Schema({
  value: String,
});
