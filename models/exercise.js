const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//js obj passed to define what an exercise should look like (i.e. data schema)
const exerciseSchema = new Schema({
    //note that id is auto-generated just like working with mongoDB by itself (ObjectId(idValue))
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    distance: Number,
    weight: Number,
    reps: Number,
    sets: Number
});


//function that connects schema with model name. input model name (string) and schema (object)
module.exports = mongoose.model('Exercise',exerciseSchema);
