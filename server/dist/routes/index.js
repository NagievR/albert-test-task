"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var peopleRoute_1 = __importDefault(require("./peopleRoute"));
var rootRouter = (0, express_1.Router)();
rootRouter.use('/people', peopleRoute_1.default);
exports.default = rootRouter;
