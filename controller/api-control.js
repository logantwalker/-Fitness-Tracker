const path = require('path');

const Workout = require('../models/workout');

exports.fetchAll =  (req, res, next) => {
    Workout.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}