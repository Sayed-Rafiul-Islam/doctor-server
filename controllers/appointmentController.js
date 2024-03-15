const Appointment = require('../models/appointmentModal')

// create Appointment

const createAppointment = async (req,res) => {
    try {
        const appointment = req.body
        const newAppointment = await Appointment.create(appointment)
        console.log(newAppointment)
        res.status(200).json(newAppointment)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// get Time Slots

const getTimeSlots = async (req,res) => {
    try {
        const inputedDate = req.query.date
        const allAppointments = await Appointment.find()
        const booked = allAppointments.filter(({date}) => date.toISOString().split("T")[0] === inputedDate)
        let time = ['10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM']
        if (booked.length === 0) {
           
            res.status(200).json(time)
        } else {
            const times = booked.map(({selectedSlot}) => {
                time = time.filter((item) => item !== selectedSlot)
                return time
            })
            res.status(200).json(times[times.length - 1])
        }        
        
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
// remove Appointments

const removeAppointment = async (req,res) => {
    try {
        const {id} = req.query
        await Appointment.deleteOne({_id : id})
        res.status(200).json()        
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    createAppointment,
    getAppointments,
    getTimeSlots,
    removeAppointment
}