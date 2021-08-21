var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name : String,
    email:{type: String , lowercase: true},
    age: {type: String , default: 0},
    bio:{type: String , default: 0}
}, {timestamps : true});

var User = mongoose.model('User' , userSchema)

module.exports = User;
