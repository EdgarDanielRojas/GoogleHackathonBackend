const ATMModel = require('../model/ATMModel')
const db = require('../util/db')

exports.createReport = function(req,res){
    const ATMModel = new ATMModel(db);
    const newATM   = JSON.parse(req.body.atmInfo);
    console.log(req.body);
    console.log(req.files);
    newATM.image = req.files;
    if(!newATM){
        res.status(400).send({error:true,message:"Please provide an animal to create"});
    }else{
        animalModel.createAnimal(newAnimal,function(err,cow){
            if(err){
                res.status(500).send(err);
            }
            res.json(cow);
        })
    }
}