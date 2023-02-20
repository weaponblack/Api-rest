/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

/** Schema creation */
const personSchema = new mongoose.Schema({

    name:{
        type:"String",
        required : true
    },
    lastName:{
        type:"String",
        required: true
    },
    identification:{
        type: "Number",
        required: true,
        unique: true
    },  
    age:{
        type: "Number",
        required: true,
        min: 1,
        max: 100
    },
    phone:{
        type: "Number",
        required:true
    },
    address:{
        type: "String",
        required:true
    },
    email:{
        type: "String",
        required: true,
        unique: true
    },
    city:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_city",
        required: false
    }
});

/** Schema exportation */

personSchema.plugin(validator);

/** Schema exportation */

module.exports = personSchema;
