require('./db/connect')
const express = require('express');
const app = express()
const routes = require('./routes/tasks')


app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', routes)

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`))