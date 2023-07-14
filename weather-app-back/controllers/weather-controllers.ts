import axios from 'axios';
import { Request } from 'express';
const dotenv = require('dotenv');
import {RequestType, CityType} from '../definitions/weatherDef'
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const getWeatherInfo = async (type?:RequestType, city?: CityType) => {
    let currentCity = "almaty";
    let currentType = "current";
    if(type) {
        currentType = type;
    }
    if(city) {
        currentCity = city;
    }
    return await axios.get(`${BASE_URL}/${currentType}.json?key=${API_KEY}&q=${currentCity}`).then(response => response.data).then(response => response);
}

export const baseController = async () => {
    return await getWeatherInfo();
}
export const typeController = async (req: Request) => {
    const type = req.params.type as RequestType;
    return await getWeatherInfo(type);
}
export const cityController = async (req: Request) => {
    const type = req.params.type as RequestType;
    const city = req.params.city as CityType;
    return await getWeatherInfo(type, city);
}