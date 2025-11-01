const cors = require("cors")
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workourtRoutes = require('./routes/workouts')



const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes 
app.use('/api/workouts', workourtRoutes) 

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })