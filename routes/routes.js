const path = require('path');

const express = require('express');

const routeControl = require('../controller/route-control');

const router = express.Router();

//render index.html
router.get('/', routeControl.getIndex);

module.exports = router