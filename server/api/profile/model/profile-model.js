"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    battle_tag: { type: String, unique: true, required: true },
    user_id: { type: String, unique: true, required: true },
    last_visit: { type: Date, unique: false, required: true, default: Date.now() }
});
exports.default = schema;
//# sourceMappingURL=profile-model.js.map