console.clear()

// Load environment variables from .env file
require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({
    origin: "*",
    credentials: true,
}))

// Connect to the database
const connectdb = require('./config/connectdb')
connectdb()

const { checkout, complete } = require('./controller/Paymentcontroller')

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/checkout', checkout)
app.get('/complete', complete)
app.get('/cancel', (req, res) => {
    res.redirect('/')
})

const port = process.env.port
app.listen(port, () => console.log('server listening at port:',port))