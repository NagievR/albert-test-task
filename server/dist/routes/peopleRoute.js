"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var peopleController_1 = require("../controllers/peopleController");
var router = (0, express_1.Router)();
router.get('/', peopleController_1.getPeople);
exports.default = router;
