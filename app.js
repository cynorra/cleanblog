const e = require('express');
const express = require('express');
const app = express();

// Mongoose - DB
const mongoose = require('mongoose');

// Mongoose Connect
mongoose.connect('mongodb+srv://cyn0r44:cyn0r4youtube@cluster0.ewsqmxr.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('DB CONNECTED SUCCESFULLY');
});

const port = 3000;

// Import
const pageRoute = require('./routes/pageRoute');
const session = require('express-session');

//Global Variable for Session
global.userIN = null;


// Template Engine
app.set('view engine', 'ejs');




// Middlewares

app.use(session({
    secret: 'my_first_blog',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));




app.use(express.static("public"));
app.use(express.json()); //FOR DB
app.use(express.urlencoded({extended: true}));




app.use('/', pageRoute);
app.use('*', (req,res,next) => {
    
    userIN = req.session.userID;
    console.log(userIN);
    next();
    
    
})







app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
