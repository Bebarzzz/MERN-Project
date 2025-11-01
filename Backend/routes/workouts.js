const express = require('express')
const Workout = require('../models/workoutModle')

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workout'})
})

// create a new workout
router.post('/', async (req, res) => {
    const{title, reps, load} = req.body
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
        
    }catch(error){
        console.log(error)
        res.status(400).json({error: error.message})
    }

    
})

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})


module.exports = router