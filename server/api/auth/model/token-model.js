"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    access_token: { type: String, unique: true, required: true },
    expires_in: { type: Date, default: Date.now() + 2592000000 }
});
exports.default = schema;
//# sourceMappingURL=token-model.js.map