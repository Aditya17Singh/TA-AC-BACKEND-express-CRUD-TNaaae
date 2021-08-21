var express = require('express');
var router = express.Router();
var form = require('../model/user')

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
router.get('/' , (req,res) => {
    //fetch all users from databse
    form.find({} , (err, users) => {
        if(err) return next(err);
        res.render('users' , {users : users});
    })
})
router.get('/:id' , (req,res,next) => {
    var id = req.params.id;
    form.findById(id, (err, user) => {
        console.log(user);
        if(err) return next(err);
        res.render('userDetails.ejs' , { user })
    })
})
router.get("/:id/edit" , (req,res,next) => {
    var id = req.params.id
    form.findById(id, (err,user) => {
        if(err) return next(err);
        res.render('editForm' , {user: user})
    })
})
router.post("/:id" , (req,res) => {
    var id = req.params.id;
    form.findByIdAndUpdate(id, req.body ,(err,updatedForm) => {
        if(err) return next(err)
        res.redirect("/user/" + id)
    })
})
//delete
router.get('/:id/delete' , (req,res,next) => {
    var id = req.params.id;
    form.findByIdAndDelete(id , (err,user) => {
        if(err) return next(err);
        res.redirect('/user')
    })
})

module.exports = router;