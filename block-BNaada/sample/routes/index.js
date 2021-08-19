var express = require('express');
var router = express.Router();
var form = require('../model/user')

router.get('/' , (req,res) => {
    //fetch all users from databse
    form.find({} , (err, users) => {
        if(err) return next(err);
        res.render('users' , {users : users});

    })
})
//user form
router.get("/new" , (req,res) => {
    res.render("form")
})

//post request
router.post("/" ,  (req,res) => {
    form.create(req.body , (err, createdform) => {
        if(err) return res.redirect('/index/new');
        res.redirect("/");   
    });
})
router.get('/:id' , (req,res,next) => {
    var id = req.params.id;
    form.findById(id, (err, user) => {
        console.log(user)
        if(err) return next(err);
        res.render('userDetails.ejs' , { user })
    })
})

module.exports = router;