var express = require('express');
var router = express.Router();

//list all the users
router.get('/' , (req,res) => {
    res.render("list" , { user: ["deepak" , "aditya" , "ankit" , "prashant"]})
})

//user form
router.get("/new" , (req,res) => {
    res.render("newUserForm")
})

//post request
router.post("/" ,  (req,res) => {
    res.send(req.body)
})


router.get("/:id" , (req,res) => {
    res.render('userDetail' , {
        user: { name: "rahul", email: "rahul@altcampus.io" },
    })
    
})


module.exports = router;