/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

/** Schema creation */
const userSchema = new mongoose.Schema({

    name:{
        type:"String",
        required : true
    },
    lastName:{
        type:"Number",
        required: true
    },
    username:{
        type: "Number",
        required: true,
        unique: true
    },  
    password:{
        type: "String",
        required: true,
    }
});
/** Schema exportation */

userSchema.plugin(validator);


/** Schema exportation */

module.exports = userSchema;
