const { ObjectId } = require('mongodb')
const Login = require('../models/loginModel')
const { createJwt } = require('../utils/varifyJWT')

// create Appointment

const login = async (req,res) => {
    try {
        const {email,password} = req.body
        const isAdmin = await Login.findOne({email})
        if (!isAdmin) {
            res.status(404).json({accessToken : null})
        } else {
            if (isAdmin.password === password) {
                const accessToken = await createJwt({email,password,date : new Date()})
                res.status(200).json({accessToken})
            } else {
                res.status(401).json({accessToken : null})
            }
            
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// export

module.exports = {
    login
}