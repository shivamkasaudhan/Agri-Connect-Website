const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

const siteUser = mongoose.model('user',UserSchema);

module.exports = siteUser;
