// Import mongoose for MongoDB interaction
const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    country: String,
    city: String,
    state: String,
    postal_code: String
});

const infoschema = new mongoose.Schema({
    name: String,
    email: String,
    address: addressSchema,
    payment: String,
    amount: Number,
    date: Date,
    items: [String]
})

const infomodel = mongoose.model('info', infoschema)

module.exports = infomodel