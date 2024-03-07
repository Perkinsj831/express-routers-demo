const express = require('express')
const app = express()
const volleyball = require('volleyball') // logging middleware

// Application level middleware
// Functions that apply on EVERY (most) requests to our server
app.use(volleyball)

/* BODY PARSER */
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connects the router to the express app
app.use('/api', require('./api'))


app.get('/', (req, res) => {
  res.send('Server is running!')
})

/* Catch any error sent to next(err) */
// app.use((error, req, res, next) => {
//   console.error(error)
//   res.status(500).send('Oh No! an Error happened')
// })

module.exports = app