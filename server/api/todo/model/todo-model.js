"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    todoMessage: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = schema;
//# sourceMappingURL=todo-model.js.map