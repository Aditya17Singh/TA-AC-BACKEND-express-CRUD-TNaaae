var express = require('express');
var router = express.Router();
var form = require('../model/user')

//user form
router.get("/new" , (req,res) => {
    res.render("form")
})

//post request
router.post("/" ,  (req,res) => {
    console.log(req.body);
    form.create(req.body , (err, createdform) => {
        if(err) return next(err);
    });
})

module.exports = router;