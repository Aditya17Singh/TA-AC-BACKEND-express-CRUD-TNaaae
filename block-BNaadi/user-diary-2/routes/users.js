var express = require('express');
var router = express.Router();
var form = require('../model/User')

router.post("/" , (req,res,next) => {
    //capture the data
    console.log(req.body);
    //save the data to database
    form.create(req.body, (err,user) => {
        console.log(err)
        res.json(user)
        res.redirect("/")
    });
    //send response
})
router.get('/' , (req,res) => {
    //fetch all users from databse
    form.find({} , (err, users) => {
        if(err) return next(err);
        res.render('users' , {users : users});
    })
})


// router.get('/users' , (req,res) => {
//     form.findOne({"name" : "Aditya1"}, (err,users) => {
//         console.log(err)
//         res.json(users)
//     })
// })
// router.get('/users/:id' , (req,res) => {
//     //capture the id
//     var id = req.params.id;
//     form.findById(id , (err,user) => {
//         console.log(err)
//         res.json(user);
//     })
// })

// //update
// router.put('/users/:id', (req,res) => {
//     console.log(req.body);
//     var id = req.params.id;
//     form.findByIdAndUpdate({_id:id} , req.body , {new: true} , (err , updateproduct) => {
//         console.log(err);
//         res.json(updateproduct)
//     })
// })

// //delete
// router.delete("/users/:id", (req, res) => {
//     var userId = "some id from database";
//     form.findByIdAndDelete(req.params.id, (err, delproduct) => {
//       if (err) return next(err);
//       res.send("user deleted");
//     });
//   });

module.exports = router