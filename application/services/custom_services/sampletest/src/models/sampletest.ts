
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const sampletestSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   pass: String
})

const sampletestModel = mongoose.model('sampletest', sampletestSchema, 'sampletest');
export default sampletestModel;
