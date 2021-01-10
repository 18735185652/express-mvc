const express = require('express');
const route = express.Router();
const { getHeros, getHerosById } = require('../service/herosService')

class HerosController {
    static initRouter(){
        route.get('/', getHeros)
        route.get('/:id', getHerosById)
        return route;
    }
}

module.exports = HerosController.initRouter()