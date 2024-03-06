const express = require('express')
const router = express.Router()

const { addNewFood, getAllFoods, getFoodById } = require('../db/foods')

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
router.get('/:id', async (req, res) => {
  const id = req.params.id

  let food = await getFoodById(id)

  res.send(food)
})


// Full route: /api/foods/:id
router.delete('/:id', (req, res) => {

})



module.exports = router