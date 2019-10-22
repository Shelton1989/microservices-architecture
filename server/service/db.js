const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'microservices',
    password: 'postgres',
    port: '5432',
});

module.exports = pool;