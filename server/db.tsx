const Pool = require('pg').Pool;

const databaseEnv = new Pool({
    user: 'tahmidchowdhury',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'tahmidchowdhury'
});

module.exports = databaseEnv;