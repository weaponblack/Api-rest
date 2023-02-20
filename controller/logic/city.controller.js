/**Dto */

const cityDto = require("../../model/dto/city.dto");
const userDto = require("../../model/dto/user.dto");

/**Helper */
 
const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")
exports.createCity = (req,res,next) => {
    let city = {
        name: req.body.name,
        foundationDate: req.body.foundationDate,
        population: req.body.population,
        temp: req.body.temp,
    }
    cityDto.create(city,(err,data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        let user = {
            name: city.name,
            lastName: city.lastName,
            username: city.identification,
            password: helper.EncryptPassword(req.body.password)

        };
        userDto.create(user,(err,u)=>{
            if(err){
                cityDto.delete({_id: data._id}, (err,data)=>{
                    console.log("Deleting due to not user creation")
                })
                return res.status(400).json(
                    {
                    error: err
                    }
                );
            }
            notHelper.sendSMS(city.phone)

            res.status(201).json(
                {
                    info:data
                }
            );
        });
    });
};

exports.updateCity = (req,res,next) => {
    let city = {
        name: req.body.name,
        lastName: req.body.lastName,
        identification: req.body.identification,
        age: req.body.age,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        city: req.body.city

    }
    cityDto.update({_id:req.body.id},city,(err,data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }   
        res.status(201).json(
                {
                    info:data
                }
            );
    });
};

exports.getAll = (req,res,next) => {
    cityDto.getAll({},(err,data) => {
        if(err){
            return res.status(400).json(
                {

                    error: err
                }
            );
        }   
        res.status(200).json(
                {
                    info:data
                }
            );
    });
};

exports.getByCode = (req,res,next) => {
    cityDto.getByCode({code:req.params.code},(err,data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }   
        res.status(200).json(
                {
                    info:data
                }
            );
    });
};

exports.deleteCity=()=>{
    cityDto.delete({_id:req.body.id},(err,data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }   
        res.status(204).json();
    });
};






