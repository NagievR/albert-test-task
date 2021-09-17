"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPeople = void 0;
var getAllPagesByURI_1 = __importDefault(require("../utils/getAllPagesByURI"));
var cache_1 = __importDefault(require("../cache/cache"));
var paginate_1 = __importDefault(require("../utils/paginate"));
var sort_1 = __importDefault(require("../utils/sort"));
var handleResponse = function (props) {
    var data = props.data, perPage = props.perPage, currentPage = props.currentPage, sortBy = props.sortBy, desc = props.desc;
    var dataToPaginate = data;
    if (sortBy) {
        dataToPaginate = (0, sort_1.default)(data, sortBy, desc);
    }
    return (0, paginate_1.default)(dataToPaginate, perPage, currentPage);
};
var getPeople = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var perPage, currentPage, sortBy, desc, initializeHandler, peopleCached, peopleList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                perPage = Number(req.query.perPage);
                currentPage = Number(req.query.currPage);
                sortBy = req.query.sortBy ? String(req.query.sortBy) : null;
                desc = req.query.desc === "true" ? true : false;
                initializeHandler = function (data) {
                    var props = {
                        data: data,
                        perPage: perPage,
                        currentPage: currentPage,
                        sortBy: sortBy,
                        desc: desc
                    };
                    res.status(200).json(handleResponse(props));
                };
                if (cache_1.default.has('peopleList')) {
                    peopleCached = cache_1.default.get('peopleList');
                    if (peopleCached) {
                        initializeHandler(peopleCached);
                        return [2 /*return*/];
                    }
                    ;
                }
                return [4 /*yield*/, (0, getAllPagesByURI_1.default)()];
            case 1:
                peopleList = _a.sent();
                if (!peopleList) {
                    res.status(400).json({ message: "Cannot get people" });
                    return [2 /*return*/];
                }
                initializeHandler(peopleList);
                cache_1.default.set('peopleList', peopleList);
                return [2 /*return*/];
        }
    });
}); };
exports.getPeople = getPeople;
