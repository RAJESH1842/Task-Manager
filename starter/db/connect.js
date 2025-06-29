const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Rajesh1842:Rajesh1842@nodeexpressproject.84o4dtd.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProject'

mongoose
.connect(connectionString)
.then(()=>console.log('CONNECTED TO THE DB...'))
.catch( (err)=>console.log(err))