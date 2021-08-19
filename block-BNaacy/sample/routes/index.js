var express = require('express');
var router = express.Router();
var form = require('../model/user')

router.get('/' , (req,res) => {
    res.render('form.ejs')
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

module.exports = router;