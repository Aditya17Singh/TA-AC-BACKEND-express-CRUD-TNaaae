var express = require('express');
var router = express.Router();
var form = require('../model/User')


router.post("/" , (req,res,next) => {
    //capture the data
    console.log(req.body);
    //save the data to database
    form.create(req.body, (err,user) => {
        console.log(err)
        res.redirect("/user")
    });
    //send response
})
router.get('/' , (req,res) => {
    //fetch all users from databse
    form.find({} , (err, users) => {
        console.log(err,users)
        if(err) return next(err);
        res.render('users' , {users : users});
    })
})

router.get('/:id' , (req,res,next) => {
    var id = req.params.id;
    form.findById(id, (err, user) => {
        console.log(user);
        if(err) return next(err);
        res.render('singleDetails.ejs' , { user })
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