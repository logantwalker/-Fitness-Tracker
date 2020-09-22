const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//js obj passed to define what an exercise should look like (i.e. data schema)
const workoutSchema = new Schema({
    //note that id is auto-generated just like working with mongoDB by itself (ObjectId(idValue))
    day: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercises: {
       type: Array,
       required: true
    }
});



//function that connects schema with model name. input model name (string) and schema (object)
module.exports = mongoose.model('Workout',workoutSchema);