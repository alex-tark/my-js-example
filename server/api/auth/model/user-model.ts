import * as mongoose from 'mongoose';

let schema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

export default schema;
