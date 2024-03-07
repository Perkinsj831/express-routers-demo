const express = require('express')
const router = express.Router()

const { addNewFood, getAllFoods, getFoodById } = require('../db/foods')


/* MIDDLEWARE FOR ROUTES WITH ID */
const checkTheId = async (req, res, next) => {
  // This middleware could do something like:
  /*
    Checking for if the user is logged in
    If they are, continue on,
    if not stop right there and return an error or send a response for user to login
  */
  
    if (+req.params.id === 3) {
      res.send('You found my secret number! Congratz')
    } else {
      next() // continues to the next function
    }
  }




//  GET /api/foods
router.get('/', async (req, res, next) => {

  try {
    let allFoods = await getAllFoods()
    res.send(allFoods)
  } catch(err) {
    next(err)
  }

})

router.post('/', async (req, res, next) => {

  try {
  console.log('REQ.BODY:', req.body)

  const newFood = await addNewFood(req.body)
  res.send(newFood)

  } catch(err) {
    next(err)
  }
})

// Full route: /api/foods/:name
router.get('/:id', checkTheId, async (req, res, next) => {
  try {
    const id = req.params.id

    let food = await getFoodById(id)
    res.send(food)
  } catch(err) {
    next(err)
  }
  
})


// Full route: /api/foods/:id
router.delete('/:id', checkTheId, (req, res) => {

})



module.exports = router