const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});


const siteUser = mongoose.model('sitUser',UserSchema);

module.exports = siteUser;
