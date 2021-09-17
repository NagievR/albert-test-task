"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var sortByAge = function (data, desc) {
    // remove people without age
    var ageCleared = data.filter(function (person) { return person.birth_year !== "unknown"; });
    if (desc) {
        return ageCleared.slice().sort(function (a, b) {
            return (0, helpers_1.sortByNumberDesc)(a.birth_year, b.birth_year);
        });
    }
    return ageCleared.slice().sort(function (a, b) {
        return (0, helpers_1.sortByNumberAsc)(a.birth_year, b.birth_year);
    });
};
exports.default = sortByAge;
