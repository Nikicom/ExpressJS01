// include express module/package
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//Database connection
const mongoose=require('mongoose')
//mlab
mongoose.connect('mongodb://customer:c123456@ds247078.mlab.com:47078/fbw4')
// when local mongodb
//mongoose.connect('mongodb://localhost/nameofDatabase')


// setting bodyparser middleware req.body
app.use(bodyParser.urlencoded({
    extended: true
}));
const indexRoute= require('./routes/index');
const userRoute = require('./routes/user');
const chatRoute = require('./routes/chat');

app.use('/', indexRoute);
app.use('/user', userRoute);
app.use('/chat', chatRoute);

// use public as static folder for css, js, images 
app.use(express.static(path.join(__dirname, 'public')));

// setup template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.listen(5000, ()=> {
    console.log('My App is running on port 5000');
});