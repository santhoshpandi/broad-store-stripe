// Import mongoose for MongoDB interaction
const mongoose = require('mongoose')

// Define the address schema
const addressSchema = new mongoose.Schema({
    country: String,
    city: String,
    state: String,
    postal_code: String
});

// Define the main info schema
const infoschema = new mongoose.Schema({
    name: String,
    email: String,
    address: addressSchema,
    payment: String,
    amount: Number,
    date: Date,
    items: [String]
})

// Create the model from the schema
const infomodel = mongoose.model('info', infoschema)

// Export the model for use in other files
module.exports = infomodel