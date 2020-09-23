const path = require('path');

const Workout = require('../models/workout');

exports.fetchAll = (req, res, next) => {
    Workout.find()
        .then(result => {
            res.json(result);

            return result;
        })
        .catch(err => console.log(err))
}

exports.postNewWorkout = (req, res, next) => {
    let exercises = [];
    const workout = new Workout({
        day: undefined,
        exercises: exercises
    });
    workout.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
}

exports.postAddExercise = (req, res, next) => {
    const type = req.body.type;
    const name = req.body.name;
    const duration = req.body.duration
    if (type === 'resistance') {
        const weight = req.body.weight;
        const sets = req.body.sets;
        const reps = req.body.reps;
        const exercises = {
            type: type,
            name: name,
            duration: duration,
            weight: weight,
            reps: reps,
            sets: sets
        };
        Workout.findOne().sort({ day: -1 }).limit(1).then(workout => {
            workout.exercises.push(exercises);
            return workout.save();
        }).catch(err => console.log(err));
    }
    else if (type === 'cardio') {
        const distance = req.body.distance;
        const exercises = {
            type: type,
            name: name,
            duration: duration,
            distance: distance
        };

        Workout.findOne().sort({ day: -1 }).limit(1).then(workout => {
            workout.exercises.push(exercises);
            return workout.save();
        }).catch(err => console.log(err));

    }
};