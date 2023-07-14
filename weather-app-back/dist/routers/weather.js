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
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
dotenv.config();
const router = express_1.default.Router();
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const getWeatherInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get(`${BASE_URL}/current.json?key=${API_KEY}&q=almaty`).then(response => response.data).then(response => response);
});
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const weatherResult = yield getWeatherInfo();
    res.json({ status: 200, data: weatherResult });
}));
router.get('/weather', (req, res) => {
    res.json({ status: 200, data: "somedata" });
});
router.get('/something else', (req, res) => {
    res.json({ status: 200, data: "somedata" });
});
module.exports = router;
