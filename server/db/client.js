const { Client } = require('pg')

// replace expresspgposts with your database name
// you created with createdb
const connectionString = 'postgres://localhost/food'

const client = new Client(connectionString);

module.exports = client;