"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByNumberDesc = exports.sortByNumberAsc = void 0;
var sortByNumberAsc = function (a, b) {
    return parseFloat(a) - parseFloat(b);
};
exports.sortByNumberAsc = sortByNumberAsc;
var sortByNumberDesc = function (a, b) {
    return parseFloat(b) - parseFloat(a);
};
exports.sortByNumberDesc = sortByNumberDesc;
