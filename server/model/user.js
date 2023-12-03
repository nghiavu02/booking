const mongoose = require('mongoose')

const userSChema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        // required: true
    },
    img:{
        type: String
    },
    country: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    }, 
    isAdmin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})


module.exports = mongoose.model('User', userSChema)