const path = require('path');

const express = require('express');

const apiControl = require('../controller/api-control');

const router = express.Router();

router.get('/api/workouts', apiControl.fetchAll);

module.exports = router