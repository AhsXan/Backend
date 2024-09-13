import mongoose from 'mongoose';

const recordsSchema = mongoose.Schema({});

export const Record = mongoose.model('Record', recordsSchema);
