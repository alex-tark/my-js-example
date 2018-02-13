import * as mongoose from "mongoose";

let schema = new mongoose.Schema({
    username:   {type: String, unique: true, required: true},
    email:      {type: String, unique: true, required: true},
    battle_tag: {type: String, unique: true, required: true},
    user_id:    {type: String, unique: true, required: true},
    last_visit: {type: Date, unique: false, required: true, default: Date.now()}
});

export default schema;
