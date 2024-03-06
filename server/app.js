const express = require('express')
const app = express()

/* BODY PARSER */
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


//    /api/extra

// Connects the router to the express app
app.use('/api', require('./api'))


app.get('/', (req, res) => {
  res.send('Server is running!')
})


module.exports = app