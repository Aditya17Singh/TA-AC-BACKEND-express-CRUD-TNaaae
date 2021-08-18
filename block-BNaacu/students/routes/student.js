var express = require('express');
var router = express.Router();

//student routes
router.get("/new" , (req,res) => {
    res.render("student-form")
})

//post request
router.post("/" ,  (req,res) => {
    res.send(req.body)
})
//list all the students
router.get('/' , (req,res) => {
    res.render("index" , { student: ["deepak" , "aditya" , "ankit" , "prashant"] })
})


router.get("/:id" , (req,res) => {
    res.render('studentDetail' , {
        student: { name: "rahul", email: "rahul@altcampus.io" },
    })
    
})


module.exports = router