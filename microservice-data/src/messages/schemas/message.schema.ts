import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  timestamp: Number,
  message: String,
});
