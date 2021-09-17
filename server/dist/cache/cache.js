"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_cache_1 = __importDefault(require("node-cache"));
var CACHE_HOURS_12 = 12 * 60 * 60;
exports.default = new node_cache_1.default({ stdTTL: CACHE_HOURS_12 });
