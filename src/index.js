const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

const connectDB = require('./config/database')
connectDB()

app.use(express.json())
// get post put delete 
app.use('/api/auth', require('./routes/auth.route'))

app.listen(PORT , () => {
    console.log(`App listening on port ${PORT}`);
})

// Serving static files in Express
// app.use('/static', express.static('public'))