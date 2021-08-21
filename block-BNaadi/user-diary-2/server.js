var express = require('express');
var mongoose = require("mongoose");
var userRouter = require('./routes/users');
var path = require('path')

//connect to database
mongoose.connect("mongodb://localhost/user-diary-2" , 
{useNewUrlParser: true ,useUnifiedTopology: true},
(err) => {
    console.log(err ? err : "connected to database");
})

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//views
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"));


//routes
app.get("/" , (req,res) => {
    res.send('Welcome');
})

//routing middleware
app.use('/user' , userRouter); 

//listening
app.listen(4000 , () => {
    console.log("server is listening on port 4k");
})