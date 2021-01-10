const herosModel = require('../model/herosModel')

class HerosService {
    async getHeros(req,res,next){
        const {result} = await herosModel.findAll();      
        res.json({err_code:0,result})
    }
    async getHerosById(req,res,next){
        const id = req.params.id;
        const {result} = await herosModel.findById(id);

        res.json({err_code:0,result})
    }

}

module.exports = new HerosService;