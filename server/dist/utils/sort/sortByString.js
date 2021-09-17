"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortByString = function (data, desc) {
    if (desc) {
        return data.slice().sort(function (a, b) {
            return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
        });
    }
    return data.slice().sort(function (a, b) {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
};
exports.default = sortByString;
