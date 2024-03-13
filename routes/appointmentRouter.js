const express = require('express');
const router = express.Router()

const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const { userAuthViaToken } = require('../middlewares/auth');



router.get('/getAppointments', userAuthViaToken, getAppointments)
router.post('/appointments', createAppointment)



module.exports = router