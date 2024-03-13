const { ObjectId } = require('mongodb')
const Appointment = require('../models/appointmentModal')

// create Appointment

const createAppointment = async (req,res) => {
    try {
        const appointment = req.body
        const newBillboard = await Appointment.create(appointment)
        res.status(200).json(newBillboard)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// get Appointments

const getAppointments = async (req,res) => {
    try {
        const user = req.user
        if (user) {
        const appointments = await Appointment.find().sort({ date : -1})
        res.status(200).json(appointments)
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    createAppointment,
    getAppointments
}