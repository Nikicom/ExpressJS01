const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const userSchema= new Schema({
    name:  String,
    age: Number,
    country:  String,
    email:  String,
    password:  String,
    created_at: Date
})

const User = mongoose.model('user', userSchema)
module.exports = User