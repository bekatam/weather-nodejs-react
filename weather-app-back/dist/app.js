"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const router = require('./routers/weather-router');
const dotenv = require('dotenv');
dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(cors());
app.use(express_1.default.json());
app.use('/', router);
app.listen(PORT);
