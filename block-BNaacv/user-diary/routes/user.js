var express = require('express');
var router = express.Router();

//list all the users
router.get('/' , (req,res) => {
    res.render('user.ejs')
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
    res.render('singleUser.ejs')
})

router.get('/:id/edit' , (req,res) => {
    //edit form
})

router.put('/:id' , (req,res) => {

})

router.delete('/:id' , (req,res) => {

})

module.exports = router;