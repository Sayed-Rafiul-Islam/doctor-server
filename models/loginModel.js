const mongoose = require("mongoose")

const Schema = mongoose.Schema

const LoginModal = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const Login = mongoose.model("Login", LoginModal)

module.exports = Login