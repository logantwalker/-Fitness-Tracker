const path = require('path');

const express = require('express');

const htmlControl = require('../controller/html-control');

const router = express.Router();

//render index.html
router.get('/', htmlControl.getIndex);

router.get('/exercise',htmlControl.getAddExercise)

router.get('/stats',htmlControl.getStats)

module.exports = router