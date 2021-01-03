const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: "db2",
    password: 'syaugi',
    port: 5432
});

module.exports = client;