const path = require('path');

const express = require('express');

const apiControl = require('../controller/api-control');

const router = express.Router();

router.get('/api/workouts', apiControl.fetchAll);

router.post('api/workouts',apiControl.postNewWorkout);

module.exports = router