//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/wpmleaderboard');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @ 27107');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log("Error in database connection: " + err);
    }
});

//port number
const port = 3000;

//adding middleware = cors (for communication of client and server even if different ports)
app.use(cors());

//adding body-parser = to parse received json objects from mongodb
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing server
app.get('/',(req, res)=>{
    res.send("Home");
});

app.listen(port,()=>{
    console.log("Server is running at port: " + port);
});