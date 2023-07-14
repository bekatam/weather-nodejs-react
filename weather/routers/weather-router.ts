import express from 'express';
import { baseController, typeController, cityController } from '../controllers/weather-controllers';

const router = express.Router();
router.get('/', async (req, res) => {
    const weatherResult = await baseController();
    res.json({status: 200, data: weatherResult});
})

router.get('/:type', async (req, res) => {
    const weatherResult = await typeController(req);
    res.json({status: 200, data: weatherResult});
})

router.get('/:type/:city', async (req, res) => {    
    const weatherResult = await cityController(req);
    res.json({status: 200, data: weatherResult});
})

module.exports = router;