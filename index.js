//Create Server with express
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') //Data base OMR
const requireDir = require('require-dir')

const app = express()
app.use(express.json())//Allows to send data in json format to my application
app.use(cors()) //Allows external access to the API


//Init DB
mongoose.connect('mongodb://localhost:27017/nodeapi')


//Require model 
requireDir('./src/models') 

//Routes
app.use('/api',require('./src/routes'))

//Listen port
app.listen(3001)



