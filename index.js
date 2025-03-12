// Clear the console
console.clear()

// Load environment variables from .env file
require('dotenv').config()

// Import express for server creation
const express = require('express')
const app = express()

// Enable CORS for all origins
const cors = require('cors')
app.use(cors({
    origin: "*",
    credentials: true,
}))

// Connect to the database
const connectdb = require('./config/connectdb')
connectdb()

// Import payment controller functions
const { checkout, complete } = require('./controller/Paymentcontroller')

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Define routes for checkout and complete
app.post('/checkout', checkout)
app.get('/complete', complete)
app.get('/cancel', (req, res) => {
    res.redirect('/')
})

// Start the server on port 8000
app.listen(8000, () => console.log('server started'))