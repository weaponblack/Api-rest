/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const citySchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
        unique: true
    },
    foundationDate: {
        type: "Number",
        required: true
    },
    population: {
        type: "Number",
        required: true
    },
    temp: {
        type: "Number",
        required: true,
        min: -60,
        max: 60
    }
});

/** Schema exportation */

citySchema.plugin(validator);

module.exports = citySchema;
