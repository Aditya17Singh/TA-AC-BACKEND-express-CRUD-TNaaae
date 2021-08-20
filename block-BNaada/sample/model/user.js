var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String , require: true},
    email: {type: String , require: true},
}, {timestamps: true});

var User = mongoose.model("User" , userSchema);

module.exports = User;