const express = require('express');
const {Schema} = express;


const adminSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address']
    },
    phone : {
        type : Number,
        required : true,
    },
  });

  const Admin =  mongoose.model('Admin', adminSchema);
  module.exports = Admin;
