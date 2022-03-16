import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  timestamp: Number,
  light: Number,
  isLedOn: Boolean,
  lightOffIn: Number,
});
