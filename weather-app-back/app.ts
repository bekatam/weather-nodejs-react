import express from 'express';
const cors = require('cors');
const router = require('./routers/weather-router');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(PORT)