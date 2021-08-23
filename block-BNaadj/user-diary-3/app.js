//require
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var userRouter = require("./routes/user");

//connect to db
mongoose.connect("mongodb://localhost/samples" , 
{useNewUrlParser: true, useUnifiedTopology: true},
(err) => {
    console.log("Connected" , err ? false : true);
})

//intantiating express app
var app = express();

//setup view engine
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"));

//middlewre
app.use(express.urlencoded({extended: false}));

app.get('/' , (req,res) => {
    res.render('form.ejs')
})

//routing middlewares
app.use('/user' , userRouter); 

app.listen(3000 , () => {
    console.log('server is listening on port 3k')
})