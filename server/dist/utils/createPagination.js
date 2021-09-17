"use strict";
// call it paginate later
Object.defineProperty(exports, "__esModule", { value: true });
var paginate = function (data, perPage, currentPage) {
    if (perPage === void 0) { perPage = 8; }
    if (currentPage === void 0) { currentPage = 1; }
    if (!data) {
        return;
    }
    var from = perPage * (currentPage - 1);
    var to = currentPage * perPage;
    var paginatedData = data.slice(from, to);
    var currentDocumentsCount = paginatedData.length;
    var lastPage = Math.round(data.length / perPage);
    var hasNextPage = data.length > to;
    return {
        data: paginatedData,
        lastPage: lastPage,
        currentPage: currentPage,
        hasNextPage: hasNextPage,
        currentDocumentsCount: currentDocumentsCount,
    };
};
exports.default = paginate;
