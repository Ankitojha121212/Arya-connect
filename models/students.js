const express = require('express');
const {Schema} = express;

const studentSchema = new  Schema({
    name:{
        type : String,
        required : true
    },
    roll_no : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        minlength : 8,
    },
    year : {
        type : Number,
        required : true,
        min : 1,
        max : 4
    },
    age : {
        type : Number,
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
      }
    });

    const Student = mongoose.model('Student', studentSchema);
    module.exports = Student;