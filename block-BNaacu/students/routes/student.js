var express = require('express');
var router = express.Router();

//student routes
router.get("/new" , (req,res) => {
    res.send("student form")
})

//list all the students
router.get('/' , (req,res) => {
    var student = ["deepak" , "aditya" , "ankit" , "prashant"];
    res.render("index" , { student: student })
})

router.post("/" ,  (req,res) => {

})

router.get("/students:id" , (req,res) => {
    //capture the book using id
})


module.exports = router