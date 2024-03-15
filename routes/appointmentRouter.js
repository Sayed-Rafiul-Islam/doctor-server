const express = require('express');
const router = express.Router()

const { createAppointment, getAppointments, getTimeSlots, removeAppointment } = require('../controllers/appointmentController');
const { userAuthViaToken } = require('../middlewares/auth');



router.get('/getAppointments', userAuthViaToken, getAppointments)
router.get('/getTimeSlots', getTimeSlots)
router.post('/appointments', createAppointment)
router.delete('/removeAppointment', removeAppointment)



module.exports = router