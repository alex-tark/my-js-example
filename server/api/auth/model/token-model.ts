import * as mongoose from "mongoose";

let schema = new mongoose.Schema({
  access_token: {type: String, unique: true, required: true},
  expires_in:   {type: Date, default: Date.now() + 2592000000}
});

export default schema;
