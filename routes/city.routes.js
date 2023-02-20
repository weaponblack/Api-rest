
const controller = require("../controller/logic/city.controller");

module.exports = (app) => {
    app.get("/city", (req,res,next) => {
        controller.getAll( req, res, next)
    })

    app.get("/city/bycode/:code", (req,res,next) => {
        controller.getByCode( req, res, next)
    })
    
    app.post("/city", (req,res,next) => {
        controller.createCity( req, res, next)
    })
    app.put("/city", (req,res,next) => {
        controller.updateCity( req, res, next)
    })
    
    app.delete("/city", (req,res,next) => {
        controller.deleteCity( req, res, next)
    })
}