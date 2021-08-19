express = require('express');
var mongoose = require("mongoose");
var path = require("path");

//connect to database
mongoose.connect("mongodb://localhost/userDiary" , 
{useNewUrlParser: true ,useUnifiedTopology: true},
(err) => {
    console.log(err ? err : "connected to database");
})


var app = express();



//setup view engine
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

//middlewares
app.use(express.urlencoded({extended: false}));

//routing middleware

app.get('/' , (req,res) => {
    res.render('use.ejs');
})

app.use('/user-diary' , require('./routes/user'))

//error handling
app.use((req,res,next) =>{
    res.send("page not found")
})

//listening
app.listen(4000 , () => {
    console.log("server is listening on port 4k");
})

