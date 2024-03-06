const client = require('./client')
const chalk = require('chalk')


async function dropTables() {
  await client.query(`
    DROP TABLE IF EXISTS foods;
  `)
}

async function createTables() {

  await client.query(`
    CREATE TABLE foods (
      id SERIAL PRIMARY KEY,
      name TEXT,
      calories INTEGER
    );
  `)

}


async function addFood() {
  await client.query(`
    INSERT INTO foods(name, calories)
    VALUES ('pizza', 900)
  `)
  await client.query(`
    INSERT INTO foods(name, calories)
    VALUES ('ice cream', 650)
  `)
  await client.query(`
    INSERT INTO foods(name, calories)
    VALUES ('carrot', 20)
  `)
}



async function seed() {
  try {
    client.connect()

    await dropTables()
    console.log(chalk.yellow('Dropping old tables..'))

    await createTables()
    console.log(chalk.yellow('Created tables...'))

    await addFood()
    console.log(chalk.yellow('Added food...'))

    console.log(chalk.green('Successfully Seeded Database!'))

  } catch(err) {
    console.error(err)
  } finally {
    client.end() // closes the connection
  }
}

seed()