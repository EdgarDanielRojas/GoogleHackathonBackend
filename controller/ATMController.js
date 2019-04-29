/* jshint esversion: 6*/
const ATMModel = require('../model/ATMModel')
//const db = require('../util/db')

exports.createReport = function(req,res){
    var ATMModel_ = new ATMModel();
    const newATM   = JSON.parse(req.body.atmInfo);
    console.log(req.body);
    console.log(req.files);
    newATM.image = req.files;
    if(!newATM){
        res.status(400).send({error:true,message:"Please provide a report to create"});
    }else{
        ATMModel_.createReport(newATM,function(err,atm){
            if(err){
                res.status(500).send(err);
            }
            res.json(atm);
        })
    }
}
