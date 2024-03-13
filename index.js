const express = require('express');
const cors = require('cors');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use('/api/webhook', express.raw({ type: 'application/json' }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))


// Route Imports

const appointmentRouter = require('./routes/appointmentRouter')
const loginRouter = require('./routes/loginRouter')


// Routes 

app.use('/api', appointmentRouter) 
app.use('/api', loginRouter) 




const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const clientOptions = { 
    serverApi: { 
        version: '1', 
        strict: false, 
        deprecationErrors: true 
    } 
}



mongoose.connect(uri, clientOptions)
.then(()=> app.listen(port, () => {
    console.log(`Connected to Database and Listening to port ${port}`)
}))
.catch((err)=> console.log(err))


app.use('/', (req, res, next) => {
    res.send('running...')
})
