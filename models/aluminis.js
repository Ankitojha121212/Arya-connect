const { name } = require('ejs');
const express = require('express');
const {Schema} = express;

const aluminiSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        min : 18,
        max : 90
    },
    company : {
        type : String,
    },
    experience : {
        type : Number,
        min : 0,
        max : 50
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    }

});

const  Alumini = mongoose.model('Alumini', aluminiSchema);
module.exports = Alumini;
