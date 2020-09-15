const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes');

//enter in password later
mongoose.connect('mongodb+srv://lwalker37:<password>@cluster0.p7jgf.mongodb.net/<dbname>?retryWrites=true&w=majority',
{   useNewUrlParser: true, 
    useUnifiedTopology: true 
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

