"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var sortByAge_1 = __importDefault(require("./sortByAge"));
var sortByString_1 = __importDefault(require("./sortByString"));
var sortData = function (data, sortBy, desc) {
    if (desc === void 0) { desc = false; }
    if (sortBy === enums_1.SortBy.age) {
        return (0, sortByAge_1.default)(data, desc);
    }
    else if (sortBy === enums_1.SortBy.name) {
        return (0, sortByString_1.default)(data, desc);
    }
    else {
        return data;
    }
};
exports.default = sortData;
