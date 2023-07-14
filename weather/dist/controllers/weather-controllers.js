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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityController = exports.typeController = exports.baseController = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv = require('dotenv');
dotenv.config();
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const getWeatherInfo = (type, city) => __awaiter(void 0, void 0, void 0, function* () {
    let currentCity = "almaty";
    let currentType = "current";
    if (type) {
        currentType = type;
    }
    if (city) {
        currentCity = city;
    }
    return yield axios_1.default.get(`${BASE_URL}/${currentType}.json?key=${API_KEY}&q=${currentCity}`).then(response => response.data).then(response => response);
});
const baseController = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield getWeatherInfo();
});
exports.baseController = baseController;
const typeController = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.params.type;
    return yield getWeatherInfo(type);
});
exports.typeController = typeController;
const cityController = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.params.type;
    const city = req.params.city;
    return yield getWeatherInfo(type, city);
});
exports.cityController = cityController;
