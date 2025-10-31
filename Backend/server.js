require('dotenv').config()
const express = require('express')
const workourtRoutes = require('./routes/workouts')



const app = express()

// listne for requests
app.listen(process.env.PORT, () => {
  console.log('Server is running on port ', process.env.PORT)
})

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes 
app.use('/api/workouts', workourtRoutes) 