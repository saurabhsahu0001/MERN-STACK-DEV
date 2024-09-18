const { json } = require('express');
const { Schema, model } = require('../connection');// choose only what yu need not whle moongoose
// we use schema  to define strcture

const mySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: String,
    createAt: { type: Date, default: Date.now }
});

module.exports = model('users', mySchema);// database = create, read ,update, delete 

// get = to read data
// post = to add data
// put=to update data
// delete = to delete data









