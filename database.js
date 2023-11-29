const { Pool } = require('pg')
const pool = new Pool({
    host:"host.docker.internal",
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'postes'
})

module.exports = pool
