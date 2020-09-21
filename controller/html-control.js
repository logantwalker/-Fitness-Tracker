const path = require('path');

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));

}

exports.getAddExercise = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
}

exports.getStats = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
}