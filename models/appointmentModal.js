const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AppointmentModal = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    note : {
        type : String
    },
    date : {
        type : Date,
        required : true
    },
    selectedSlot : {
        type : String,
        required : true
    }
})

const Appointment = mongoose.model("Appointment", AppointmentModal)

module.exports = Appointment