const client = require('./client')



async function getAllFoods() {
  const { rows } = await client.query(`
    SELECT * FROM foods;
  `)

  console.log(rows)

  return rows
}

async function addNewFood(food) {

  const { name, calories } =  food


  const { rows: [addedFood] } = await client.query(`
    INSERT INTO foods(name, calories)
    VALUES ($1, $2) RETURNING *;
  `, [ name, calories])


  console.log(addedFood)
  return addedFood
}

async function getFoodById(id) {
  const { rows: [food] } = await client.query(`
    SELECT * FROM foods
    WHERE id = $1
  `, [id])

  return food
}

module.exports = { addNewFood, getAllFoods, getFoodById }