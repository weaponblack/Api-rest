
const controller = require("../controller/logic/city.controller");

module.exports = (app) => {
    app.get("/city", (req, res, next) => {
        controller.getAll(req, res, next);
    });
    // se reemplazaria por ByCode 
    app.get("/city/getByName/:name", (req, res, next) => {
        controller.getByName(req, res, next);
    });

    app.post("/city", (req, res, next) => {
        controller.createcity(req, res, next);
    });

    app.put("/city", (req, res, next) => {
        controller.updatecity(req, res, next);
    });

    app.delete("/city", (req, res, next) => {
        controller.deletecity(req, res, next);
    });

};