const path = require('path');

const Workout = require('../models/workout');

exports.fetchAll =  (req, res, next) => {
    Workout.find()
        .then(result => {
            res.json(result);

            return result;
        })
        .catch(err => console.log(err))
}

exports.postNewWorkout = (req, res, next) => {
    const type = req.body.type;
    const name = req.body.name;
    const duration = req.body.duration
    let weight;
    let sets;
    let reps;
    let distance;
    if(type === 'resistance'){
        weight = req.body.weight;
        sets = req.body.sets;
        reps = req.body.reps;
        const exercises = [{
            type: type,
            name: name,
            duration: duration,
            weight: weight,
            reps: reps,
            sets: sets
        }]
        const workout = new Workout ({
            day: undefined,
            exercises: exercises
        });

        workout.save()
            .then(result =>{
                console.log(result)
            })
            .catch(err => console.log(err));
    }
    else if(type === 'cardio'){
        distance = req.body.distance;

        const exercises = [{
            type: type,
            name: name,
            duration: duration,
            distance: distance
        }];

        const workout = new Workout ({
            day: undefined,
            exercises: exercises
        });

        workout.save()
            .then(result =>{
                console.log(result)
            })
            .catch(err => console.log(err));
    }
  };