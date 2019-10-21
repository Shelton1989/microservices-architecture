const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'microservices',
    password: 'postgres',
    port: 5555,
});

module.exports = pool;