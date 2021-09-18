"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors = require('cors');
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
