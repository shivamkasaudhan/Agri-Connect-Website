const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/site');
        console.log('Connected to mongo DB');
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;