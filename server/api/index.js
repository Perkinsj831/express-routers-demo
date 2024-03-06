// API ROUTER

const express = require('express')

const router = express.Router()


// The endpoint ALREADY should have /api as the start

// this is the /api endpoint
router.get('/', (req, res) => {
  res.send('You are in the /api routes')
})

// This endpoint is /api/extra (cause it already checked /api)
router.get('/extra', (req, res) => {
  res.send('You are in the EXTRA api route')
})


// Connect FOODS router to this one
//  This router is all the  /api enpoints
//  I want to connect /api/foods

router.use('/foods', require('./foods'))



module.exports = router